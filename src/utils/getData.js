import contract from "../contracts/governanceABI.json";
import token from "../contracts/tokenABI.json";
import { ethers } from "ethers";
const ethereum = window.ethereum;
const address = localStorage.getItem("my-data");

export const daoDetails = async () => {
  try {
    if (ethereum) {
      console.log(address);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const daoContract = new ethers.Contract(address, contract, signer);
      let daoName = await daoContract.name();
      console.log(daoName, "name");
      return daoName;
    }
  } catch (err) {
    console.log(err);
  }
};

export const holders = async () => {
  try {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      let tknaddress = localStorage.getItem("tknadd");
      const tknholders = new ethers.Contract(tknaddress, token, signer);
      let tkns = await tknholders.getTokenHolders();
      let bal = [];
      console.log(tkns, "tkns");
      for (let b of tkns) {
        let amount = await tknholders.balanceOf(b);
        // bal.push({"hld":b,"amount":parseInt(amount._hex)});
        console.log(amount, "amount");
        let hldadd = b.slice(0, 6) + "...." + b.slice(b.length - 4);
        bal.push({"holder":hldadd,"amount":ethers.utils.formatEther(amount)});
      }
      console.log(bal.length, "tk");
      return bal;
    }
  } catch (err) {
    console.log(err);
  }
};

export const tokenTotalSupply = async () =>{
    try{
       if(ethereum){
            const tokenAddress = localStorage.getItem("tknadd");
           console.log(tokenAddress);
           const provider = new ethers.providers.Web3Provider(ethereum);
           const signer = provider.getSigner();
          
           const tokenContractDetails = new ethers.Contract(tokenAddress,token, signer);
           console.log(tokenContractDetails);
           let  tokens= await tokenContractDetails.totalSupply();
           console.log(tokens,"tokens");
           return ethers.utils.formatEther(tokens);
       }
         
    }catch(err){
        console.log(err);
   }
   }

   export const tokenNameAndSymbol = async () =>{
    try{
       if(ethereum){
            const tokenAddress = localStorage.getItem("tknadd");
           console.log(tokenAddress);
           const provider = new ethers.providers.Web3Provider(ethereum);
           const signer = provider.getSigner();
          
           const tokenContractDetails = new ethers.Contract(tokenAddress,token, signer);
           console.log(tokenContractDetails);
           let  tokenName= await tokenContractDetails.name();
           let  tokenSymbol= await tokenContractDetails.symbol();

           console.log(`${tokenName}(${tokenSymbol})`,"tokens");
           return {tokenName,tokenSymbol};
       }
         
    }catch(err){
        console.log(err);
   }
   }