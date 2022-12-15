import {ethers} from "ethers"
import keccak256 from "keccak256";
import bytes from "bytes";
import governABI from "../contracts/governanceABI.json";
const ethereum = window.ethereum;
const Governance = localStorage.getItem("govadd");
let tokenAddress = localStorage.getItem("tknadd");

export const addToken = async (token) => {
  try {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const governance = new ethers.Contract(Governance, governABI, signer);
     
      const supply = ethers.utils.parseUnits(token.tokens, "ether");
      let ABI = [
        "function _mint(address to, uint256 amount)"
    ];
      let iface = new ethers.utils.Interface(ABI);
      let calldata = iface.encodeFunctionData("_mint", [
         token.tknaddress,
        supply,
      ]);
      console.log(calldata);
      let Description = `Proposal  #10 : ADD TOKEN`
      const proposal = await governance.propose(
        [tokenAddress],
        [0],
        [calldata],
         Description
      )
  
    const res = await proposal.wait();
    const hash = res.events[0].args;
    localStorage.setItem('proposalId',hash[0]._hex);
    localStorage.setItem('proposalDescription',hash[8]);
    console.log(hash,"hash");
     return hash;
    }
  } catch (err) {
    console.log(err);
  }
};
