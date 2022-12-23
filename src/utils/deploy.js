import { toast } from "react-toastify";
import tokenABI from "../contracts/tokenABI.json";
import tokenByteCode from "../contracts/tokenByteCode.json";
import timelockABI from "../contracts/timelockABI.json";
import timelockByteCode from "../contracts/timelockByteCode.json";
import governanceABI from "../contracts/governanceABI.json";
import governanceByteCode from "../contracts/governanceByteCode.json";
import treasuryABI from "../contracts/treasuryABI.json";
import treasuryByteCode from "../contracts/treasuryByteCode.json";

import { ContractFactory, ethers } from "ethers";
import { daoDetails } from "./getData";
const ethereum = window.ethereum;

export const deploy = async (
  name,
  symbol,
  DaoName,
  DaoQourum,
  votingPeriod,
  setloading,
  wltarr,
  waltbal
) => {
  try {
    if (!ethereum)
      throw toast.error("No crypto wallet found. Please install it.");
    await ethereum.request({ method: "eth_requestAccounts" });
    setloading(true);
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const factory = new ContractFactory(tokenABI, tokenByteCode.object, signer);

    let am = waltbal.map((e) => {
      return ethers.utils.parseUnits(e, "ether");
    });

    const supply = ethers.utils.parseUnits("90", "ether");
    console.log(am);
    const token = await factory.deploy(name, symbol, wltarr, am);
    await token.deployed();
    const tknholders = new ethers.Contract(token.address, tokenABI, signer);
    await tknholders.delegate("0x47245a94a1a278f8A33ebD6d5BB20c14eEb8b5a9");
    console.log(token, "gum");
    const factory1 = new ContractFactory(timelockABI, timelockByteCode.object,signer);
    const proposer = "0x47245a94a1a278f8A33ebD6d5BB20c14eEb8b5a9";
    const executor = "0x47245a94a1a278f8A33ebD6d5BB20c14eEb8b5a9";
    const admin = "0x47245a94a1a278f8A33ebD6d5BB20c14eEb8b5a9";

    const timelock = await factory1.deploy(0, [proposer], [executor], admin);
    await timelock.deployed();
    const tmlk = new ethers.Contract(timelock.address, timelockABI, signer);
    const proposerRole = await tmlk.PROPOSER_ROLE();
    const executorRole = await tmlk.EXECUTOR_ROLE();
    console.log(proposerRole,"proposer");
    

    const factory2 = new ContractFactory(
      governanceABI,
      governanceByteCode.object,
      signer
    );
    const votingperiod =
      votingPeriod.day * 7200 +
      votingPeriod.hours * 300 +
      votingPeriod.mins * 5;
    const governance = await factory2.deploy(
      DaoName,
      token.address,
      timelock.address,
      DaoQourum,
      votingperiod
    );
    console.log(governance.address, "address");
    await governance.deployed();
    
    const funds = ethers.utils.parseUnits("0.0001", "ether");
    const factory3 = new ContractFactory(treasuryABI, treasuryByteCode.object,signer);
    const treasury = await factory3.deploy({ value: funds });

    await treasury.deployed();
    const ownship = new ethers.Contract(treasury.address, treasuryABI, signer);
    await ownship.transferOwnership(timelock.address);
    
    
    localStorage.setItem("timelockadd", timelock.address);
    localStorage.setItem("tknadd", token.address);
    localStorage.setItem("govadd", governance.address);
    localStorage.setItem("treadd",treasury.address);
    await tmlk.grantRole(proposerRole, governance.address);
    await tmlk.grantRole(executorRole, governance.address);
    setloading(false);
   
    return governance.address;
  } catch (err) {
    console.log("errorrr deply msg fn", err);
    toast.error(err.message ? err.message : err);
  }
};
