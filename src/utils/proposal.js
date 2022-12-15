import { ethers } from "ethers"
import keccak256 from "keccak256";
import bytes from "bytes";
import governABI from "../contracts/governanceABI.json";
const ethereum = window.ethereum;
const Governance = localStorage.getItem("govadd");
let tokenAddress = localStorage.getItem("tknadd");

export const addToken = async (token) => {
    try {
        console.log(token, "jhjhk");
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
            let Description = `Proposal  #1 : ADD TOKEN`
            const proposal = await governance.propose(
                [tokenAddress],
                [0],
                [calldata],
                Description
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
            const hash = res.events[0].args;
            localStorage.setItem('proposalId',hash[0]._hex);
            localStorage.setItem('proposalDescription',hash[8]);
            console.log(hash, "hash");
            return hash;
        }
    } catch (err) {
        console.log(err);
    }
};

export const voteProposal = async () => {
    try {
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const proposalId=localStorage.getItem('proposalId')
            const governance = new ethers.Contract(Governance, governABI, signer);
            const voteProp=await governance.castVote(proposalId,1);
            console.log(voteProp);
        }
    } catch (error) {
        console.log(error);

    }
}
