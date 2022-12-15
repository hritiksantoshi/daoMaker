import {ethers} from "ethers"
import keccak256 from "keccak256";
import bytes from "bytes";
import governABI from "../contracts/governanceABI.json";
const ethereum = window.ethereum;
const Governance = localStorage.getItem("govadd");
let tokenAddress = localStorage.getItem("tknadd");

export const addToken = async () => {
  try {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const governance = new ethers.Contract(Governance, governABI, signer);
     
      const supply = ethers.utils.parseUnits("90", "ether");
      let ABI = [
        "function _mint(address to, uint256 amount)"
    ];
      let iface = new ethers.utils.Interface(ABI);
      let calldata = iface.encodeFunctionData("_mint", [
        "0x47245a94a1a278f8a33ebd6d5ba21c14eeb8b5a9",
        supply,
      ]);
      console.log(calldata);
      const proposal = await governance.propose(
        ["0x47245a94a1a278f8A33ebD6d5BB20c14eEb8b5a9"],
        [0],
        ["0x4e6ec24700000000000000000000000047245a94a1a278f8a33ebd6d5ba21c14eeb8b5a9000000000000000000000000000000000000000000000004e1003b28d9280000"],
        "ProPosal 1:ADD new token5"
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
    //     `${proposal.hash}`,
    //     1,
    //     300000
    //   );
    //   console.log(proposalReciept,"id");
    //   governance.on("ProposalCreated", (proposalId) => {
    //     console.log(proposalId,"pro");
    // });
    const res = await proposal.wait();
    const hash = res.events[0].args[0];
    console.log(hash,"hash");
     
    }
  } catch (err) {
    console.log(err);
  }
};
