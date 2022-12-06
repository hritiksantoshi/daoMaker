import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import ConnectionModal from '../../components/connectionModal/ConnectionModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getBalance} from '../../config';
import wallet from "../../assets/wallet.png"
import "./DaoNav.css";
const DaoNav = () => {
    const [show,setShow]=useState(false);
    const [accountAddress,setAccountAddress]=useState('');
    const [accountAddressDisplay,setAccountAddressDisplay]=useState('');
    const disconnectWallet = ()=>{
        console.log('wallet disconnected');
        localStorage.removeItem('isWalletConnected')
        setAccountAddress('');
    }
    const redirectPage =async()=>{
        console.log(accountAddress);                                                                                    
        if(accountAddress=='' || accountAddress== null){
            toast.error('Connect your Metamask wallet !')
        }
        else{
            const addressBalance=await getBalance(accountAddress);
            console.log(addressBalance);
            if(addressBalance>0.2){
                window.location.href='/token'
            }
            else{
                toast.error('Atleast 0.2 eth required.')
            }
        }
        
        
    }
  return (
    <div className="NavContainer">
      <div className="navbar">
        <span className="dot"></span>
        <span className="OrganizationItem">dapp.blocktech.eth</span>
      </div>
      <div className="rightmenu">
      {(accountAddress !=='' && accountAddress !==null) ? 
      <Button  type="button" className="connectbtn" onClick={()=>{setShow(!show)}}>
     <img src={wallet} style={{width:24,height:24}} /> 
     <span className="walletadd">{accountAddressDisplay}</span>
      <span className="Button">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"></path></svg></span>
      </Button>
      :
      <Button  type="button" className="connectbtn" onClick={()=>{setShow(!show)}}>
      <span className="Button">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"></path></svg></span>
      Connect account
      </Button>
      }
      
      <ConnectionModal show={show} setShow={setShow} setAccountAddress={setAccountAddress} setAccountAddressDisplay={setAccountAddressDisplay}/>
      </div>
    </div>
  );
};
export default DaoNav;
