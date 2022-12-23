import { ethers } from "ethers";
import keccak256 from "keccak256";
import bytes from "bytes";
import governABI from "../contracts/governanceABI.json";
import timelockABI from "../contracts/timelockABI.json";
import treasuryABI from "../contracts/treasuryABI.json";

const ethereum = window.ethereum;
const Governance = localStorage.getItem("govadd");
let tokenAddress = localStorage.getItem("tknadd");
let timelockAddress = localStorage.getItem("timelockadd");
let treasuryAddress = localStorage.getItem("treadd");

export const withdraw = async (address, amount) => {
  try {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
     
  
      const governance = new ethers.Contract(Governance, governABI, signer);
      console.log(address,amount);
      let ABI = ["function releaseFunds(address _payee,uint rfunds)"];
      let iface = new ethers.utils.Interface(ABI);
      let fund = ethers.utils.parseUnits(amount.toString(), "ether");
      let calldata = iface.encodeFunctionData("releaseFunds", [address, fund]);
      //   console.log(calldata, "calldata");
      // const web3 = new Web3(ethereum);
      // const NameContract = new web3.eth.Contract(treasuryABI, treasuryAddress);

      console.log(calldata, "gjh");
      let id = localStorage.setItem("proposalNo",0);
      let desc = parseInt(localStorage.getItem('proposalNo')) + 1;
      let propNo = localStorage.setItem("proposalNo",desc);
     
      let Description = `Proposal #${propNo}`;
      const proposal = await governance.propose(
        [treasuryAddress],
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

export const transferProposal = async (setVoted, address, amount) => {
  try {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const proposalId = localStorage.getItem("proposalId");
      const governance = new ethers.Contract(Governance, governABI, signer);
      let proposalState = await governance.state(proposalId);
      const voteProp = await governance.castVoteWithReason(
        proposalId,
        1,
        "nothing"
      );
      await voteProp.wait(1);
      setVoted(true);

      console.log(
        `Current state of proposal: ${proposalState.toString()} (Active) \n`
      );
      const snapshot = await governance.proposalSnapshot(proposalId);
      console.log(`Proposal created on block ${snapshot.toString()}`);

      const deadline = await governance.proposalDeadline(proposalId);
      console.log(`Proposal deadline on block ${deadline.toString()}\n`);

      let blockNumber = await provider.getBlockNumber();
      console.log(`Current blocknumber: ${blockNumber}\n`);

      // const quorum = await governance.quorum(blockNumber - 1 );
      // console.log(`Number of votes required to pass: ${ethers.utils.formatEther(quorum.toString(), 'ether')}\n`)

      const { againstVotes, forVotes, abstainVotes } =
        await governance.proposalVotes(proposalId);
      console.log(
        `Votes For: ${ethers.utils.formatEther(forVotes.toString(), "ether")}`
      );
      console.log(
        `Votes Against: ${ethers.utils.formatEther(
          againstVotes.toString(),
          "ether"
        )}`
      );
      console.log(
        `Votes Neutral: ${ethers.utils.formatEther(
          abstainVotes.toString(),
          "ether"
        )}\n`
      );

      proposalState = await governance.state(proposalId);
      console.log(
        `Current state of proposal: ${proposalState.toString()} (Succeeded) \n`
      );

      const supply = ethers.utils.parseUnits("10", "ether");
      // let ABI = ["function releaseFunds(address _payee,uint rfunds)"];
      // let iface = new ethers.utils.Interface(ABI);
      // let fund = ethers.utils.parseUnits(amount.toString(), "ether");
      // let calldata = iface.encodeFunctionData("releaseFunds", [address, fund]);
      // //   const web3 = new Web3(ethereum);
      // // const NameContract = new web3.eth.Contract(treasuryABI, treasuryAddress);

      // let Description = `Release Funds`;
      // const descriptionHash = ethers.utils.id(Description);

      // console.log(descriptionHash, "jhj");

      //  const queue = await governance.queue([treasuryAddress], [0], [calldata], descriptionHash);
      //  console.log(queue,"queue");

      // const execute = await governance.execute(
      //   [treasuryAddress],
      //   [0],
      //   [calldata],
      //   descriptionHash
      // );
      // console.log(execute, "execute");
    }
  } catch (error) {
    console.log(error);
  }
};

export const execute = async (address,amount) => {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const proposalId = localStorage.getItem("proposalId");
    const governance = new ethers.Contract(Governance, governABI, signer);
    let ABI = ["function releaseFunds(address _payee,uint rfunds)"];
    let iface = new ethers.utils.Interface(ABI);
    let fund = ethers.utils.parseUnits(amount, "ether");
    let calldata = iface.encodeFunctionData("releaseFunds", [address, fund]);
    let propNo = localStorage.getItem("proposalNo");
    let Description = `Proposal #${propNo}`;
    const descriptionHash = ethers.utils.id(Description);
    const queue = await governance.queue([treasuryAddress], [0], [calldata], descriptionHash);
    console.log(queue,"queue");
     await queue.wait(1);
   const execute = await governance.execute(
     [treasuryAddress],
     [0],
     [calldata],
     descriptionHash
   );
  
   console.log(execute, "execute");
  } catch (err) {
    console.log(err);
  }
};
