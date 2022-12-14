import { ethers } from "ethers";
import governABI from "../contracts/governanceABI.json";
const ethereum = window.ethereum;
const Governance = localStorage.getItem("my-data");



export const addToken = async () =>{
    try{
        if (ethereum) {
          
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
      
            const governance = new ethers.Contract(Governance, governABI, signer);
            let ABI = [
                "function transfer(address to, uint amount)"
            ];
            await governance.propose(

            )
          
        }
    }catch(err){
        console.log(err);
    }
}