import { ethers } from "ethers";
import keccak256 from "keccak256";
import bytes from "bytes";
import governABI from "../contracts/governanceABI.json";
import timelockABI from "../contracts/timelockABI.json"
const ethereum = window.ethereum;
const Governance = localStorage.getItem("govadd");
let tokenAddress = localStorage.getItem("tknadd");
let timelockAddress = localStorage.getItem("timelockadd");

export const addToken = async (token) => {
  try {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const governance = new ethers.Contract(Governance, governABI, signer);
      
      const supply = ethers.utils.parseUnits(token.tokens, "ether");
      let ABI = ["function transfer(address to, uint256 amount)"];
      let iface = new ethers.utils.Interface(ABI);
      let calldata = iface.encodeFunctionData("transfer", [
        token.tknaddress,
        supply,
      ]);
      console.log(calldata, "calldata");
      let Description = `add HNrToken7`;
      const proposal = await governance.propose(
        [tokenAddress],
        [0],
        [calldata],
        Description
      );

      const res = await proposal.wait();
      const hash = res.events[0].args;
      localStorage.setItem("proposalId", hash.proposalId);
      localStorage.setItem("proposalDescription", hash[8]);
      console.log(hash, "hash");
      return hash;
    }
  } catch (err) {
    console.log(err);
  }
};

export const voteProposal = async () => {
  try {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const proposalId = localStorage.getItem("proposalId");
      const governance = new ethers.Contract(Governance, governABI, signer);
      // const voteProp = await governance.castVoteWithReason(
      //   proposalId,
      //   1,
      //   "nothing"
      // );
      // await voteProp.wait();
    //   const tmlk = new ethers.Contract(timelockAddress, timelockABI, signer);
    //   const proposerRole = await tmlk.PROPOSER_ROLE();
    // const executorRole = await tmlk.EXECUTOR_ROLE();
    // await tmlk.grantRole(proposerRole, Governance);
    // await tmlk.grantRole(executorRole, tokenAddress);
      
      let proposalState = await governance.state(proposalId)
    console.log(`Current state of proposal: ${proposalState.toString()} (Queued) \n`);
    const snapshot = await governance.proposalSnapshot(proposalId)
    console.log(`Proposal created on block ${snapshot.toString()}`)

    const deadline = await governance.proposalDeadline(proposalId)
    console.log(`Proposal deadline on block ${deadline.toString()}\n`)

    let blockNumber = await provider.getBlockNumber();
    console.log(`Current blocknumber: ${blockNumber}\n`);

    // const quorum = await governance.quorum(blockNumber - 1 );
    // console.log(`Number of votes required to pass: ${ethers.utils.formatEther(quorum.toString(), 'ether')}\n`)


    const { againstVotes, forVotes, abstainVotes } = await governance.proposalVotes(proposalId);
    console.log(`Votes For: ${ethers.utils.formatEther(forVotes.toString(), 'ether')}`);
    console.log(`Votes Against: ${ethers.utils.formatEther(againstVotes.toString(), 'ether')}`);
    console.log(`Votes Neutral: ${ethers.utils.formatEther(abstainVotes.toString(), 'ether')}\n`);

     proposalState = await governance.state(proposalId)
    console.log(`Current state of proposal: ${proposalState.toString()} (Succeeded) \n`)

      const supply = ethers.utils.parseUnits("10", "ether");
      let ABI = ["function transfer(address to, uint256 amount)"];
      let iface = new ethers.utils.Interface(ABI);
      let calldata = iface.encodeFunctionData("transfer", [
        "0xAf2FFfD3E5fa0A2C528a01cf8BcDa22b41e6769B",
        supply,
      ]);
      let Description = `add HNrToken7`;
      const descriptionHash = ethers.utils.id(
        Description
      );

      console.log(descriptionHash,"jhj");
      
      // const queue = await governance.queue([tokenAddress], [0], [calldata], descriptionHash);
      // console.log(queue,"queue");
      const execute = await governance.execute(
        [tokenAddress],
        [0],
        [calldata],
        descriptionHash,
      );
      console.log(execute,"execute");
      
    }
  } catch (error) {
    console.log(error);
  }
};
