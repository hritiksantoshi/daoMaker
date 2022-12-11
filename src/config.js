import {ethers} from 'ethers'
export const connectMetamask = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      
      return account;
    }
    } catch (error) {
      console.log(error);
    }
    
  }

  export const getBalance = async (address) =>{
    const { ethereum } = window;
    const Balance = await ethereum.request({
        method:'eth_getBalance',
        params: [address, 'latest']});
    
    console.log(ethers.utils.formatEther(Balance));
    return ethers.utils.formatEther(Balance); 
}

export const isWalletConnected = () => {
  if(localStorage.getItem('isWalletConnected') === 'true'){
      return true
  }

  return false;
}

export const connectWalletLocaly = () => {
  localStorage.setItem('isWalletConnected', true);
}

export const disconnectWallet = () =>{
  localStorage.removeItem('isWalletConnected');
  
}