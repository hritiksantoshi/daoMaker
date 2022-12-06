import {  toast } from 'react-toastify';
import tokenABI from "../contracts/tokenABI.json";
import tokenByteCode from "../contracts/tokenByteCode.json";
import timelockABI from "../contracts/timelockABI.json";
import timelockByteCode from "../contracts/timelockByteCode.json";
import governanceABI from "../contracts/governanceABI.json";
import governanceByteCode from "../contracts/governanceByteCode.json"
import { ContractFactory , ethers } from "ethers";
const ethereum = window.ethereum;


export const deploy = async (name,symbol,DaoName,DaoQourum) => {
  try{
    if (!ethereum)
        throw toast.error("No crypto wallet found. Please install it.");
          await ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const factory = new ContractFactory(tokenABI, tokenByteCode.object, signer);
     
      const supply = ethers.utils.parseUnits("1000", 'ether') ;
      const token = await factory.deploy(name,symbol,supply);
      
      const factory1 = new ContractFactory(timelockABI, timelockByteCode.object, signer);
      const proposer = "0x47245a94a1a278f8A33ebD6d5BB20c14eEb8b5a9";
      const executor = "0x47245a94a1a278f8A33ebD6d5BB20c14eEb8b5a9";
      const admin = "0x47245a94a1a278f8A33ebD6d5BB20c14eEb8b5a9";

      const timelock = await factory1.deploy(1,[proposer],[executor],admin);
      
      const factory2 = new ContractFactory(governanceABI, governanceByteCode.object, signer);
      const votingPeriod = 7200;
      const governance = await factory2.deploy(DaoName,token.address,timelock.address,DaoQourum,votingPeriod);

       console.log(governance,"deployed");
     
  }catch(err){
    console.log("errorrr deply msg fn", err);
    toast.error(err.message ? err.message : err);
  }
}