import contract from "../contracts/governanceABI.json";
import token from "../contracts/tokenABI.json"
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

export const holders = async () =>{
    try{
       if(ethereum){
           
           const provider = new ethers.providers.Web3Provider(ethereum);
           const signer = provider.getSigner();
          let tknaddress = localStorage.getItem("tknadd");
           const tknholders = new ethers.Contract(tknaddress, token, signer);
           let tkns = await tknholders.getTokenHolders();
           let  bal = tkns.map(async(b) =>{
            let amount = await tknholders.balanceOf(b);
            return {"hld":b,"amount":parseInt(amount._hex)};
            console.log(parseInt(amount._hex));
           })
           console.log(bal,'tk');
           return bal;
       }
         
    }catch(err){
        console.log(err);
    }
   }