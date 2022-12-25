import React,{useState,useEffect,useContext} from "react";
import Button from 'react-bootstrap/Button';
import ConnectionModal from '../../components/connectionModal/ConnectionModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {isWalletConnected ,connectMetamask} from '../../config';
import wallet from "../../assets/wallet.png"
import { daoDetails } from "../../utils/getData";
import { StepContext } from "../../App";
import DisconnectModal from "../../components/DisconnectModal/DisconnectModal"
import "./DaoNav.css";
const DaoNav = () => {
  const {
    show,
    setShow,
    showDiss,
    setShowDiss,
    walletAddress,
    setWalletAddress,
    displayWalletAddress,
    setDisplayWalletAddress,
  } = useContext(StepContext);
  
    const [name,setName] = useState('')
    

    const data = async () => {
      try {
        const res = await daoDetails();
          setName(res);
      } catch (error) {
        console.log(error);
      }  
    }
  
    useEffect(() => {
      data(); 
  },[]);

  const isWalletAlreadyConnected = async () => {
    if (isWalletConnected()) {
      const accounts = await connectMetamask();
      setWalletAddress(accounts);  
      const accountDisplay =  accounts.slice(0, 5) + "...." + accounts.slice(accounts.length - 4);
       setDisplayWalletAddress(accountDisplay);
  };
}


  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        isWalletAlreadyConnected();
      });
    }
  });
  return (
    <div className="NavContainer">
      <div className="navbar">
        <span className="dot"></span>
        <span className="OrganizationItem">{name}.blocktech.eth</span>
      </div>
      <div className="rightmenu">
      { walletAddress? 
      <>
      <Button  type="button" className="connectbtn" onClick={()=>{setShowDiss(!showDiss)}}>
     <img src={wallet} style={{width:24,height:24}} /> 
     <span className="walletadd">{displayWalletAddress}</span>
      <span className="Button">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"></path></svg></span>
      </Button>
      <DisconnectModal />
      </>
      :
      <Button  type="button" className="connectbtn" onClick={()=>{setShow(!show)}}>
      <span className="Button">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"></path></svg></span>
      Connect account
      </Button>
      }
      
      <ConnectionModal/>
      </div>
    </div>
  );
};
export default DaoNav;
