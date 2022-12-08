import contract from "../contracts/governanceABI.json"
import { ethers } from "ethers";
const ethereum = window.ethereum;
const address = localStorage.getItem("my-data");

export const daoDetails = async () =>{
 try{
    if(ethereum){
        console.log(address);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
       
        const daoContract = new ethers.Contract(address, contract, signer);
        let daoName = await daoContract.name();
        console.log(daoName,'name');
        return daoName;
    }
      
 }catch(err){
     console.log(err);
 }
}