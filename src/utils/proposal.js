import {ethers} from "ethers"
import keccak256 from "keccak256";
import bytes from "bytes";
import governABI from "../contracts/governanceABI.json";
const ethereum = window.ethereum;
const Governance = localStorage.getItem("govadd");
let tokenAddress = localStorage.getItem("tknadd");

export const addToken = async (token) => {
  try {
    console.log(token,"jhjhk");
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
      const proposal = await governance.propose(
        [tokenAddress],
        [0],
        [calldata],
        "Proposal #4 : ADD TOKEN"
      )
    //   const descriptionHash = keccak256(bytes("ProPosal #1:add T8ken"));
    //   const hashproposal = await governance.hashProposal(
    //     [tokenAddress],
    //     [0],
    //     [calldata],
    //     descriptionHash
    //   );
    //    console.log(proposal, "txn");
    //   const proposalReciept = await provider.waitForTransaction(
    //     ${proposal.hash},
    //     1,
    //     300000
    //   );
    //   console.log(proposalReciept,"id");
    //   governance.on("ProposalCreated", (proposalId) => {
    //     console.log(proposalId,"pro");
    // });
    const res = await proposal.wait();
    const hash = res.events[0].args;
    console.log(hash,"hash");

    }
  } catch (err) {
    console.log(err);
  }
};