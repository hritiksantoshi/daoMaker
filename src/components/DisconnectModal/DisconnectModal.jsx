import React ,{useContext} from 'react'
import { Modal, Button } from "react-bootstrap";
import { StepContext } from '../../App';
import {BiCopy} from "react-icons/bi" 
import metamask from "../../assets/metamask.webp";
import copy from "copy-to-clipboard"; 
import "./DisconnectModal.css";

const DisconnectModal = () => {
  const {showDiss, setShowDiss , walletAddress,setWalletAddress,displayWalletAddress, setDisplayWalletAddress } = useContext(StepContext);
  const handleClose = () => {
    setShowDiss(false);
  };
  let wlt = localStorage.getItem('wltaddress');
  let wltadd;
  if(wlt){
  wltadd =  wlt.slice(0, 5) + "...." + wlt.slice(wlt.length - 4);
  }
  const disconnectWallet = ()=>{
    console.log('wallet disconnected');
    localStorage.removeItem('wltaddress')
    setWalletAddress('');
}

const handledisconnect = () => {
  handleClose();
  disconnectWallet();
  
}
  return (
    <Modal  className="dissModal"show={showDiss} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ACTIVE ACCOUNT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='bodyContent'>
            <div style={{float:"left",display:'flex'}}>
            <img src={metamask} style={{ width: 30, height: 30 ,marginRight:8}}/>
            <h5 style={{fontSize:18,fontWeight:100,paddingTop:4}}>Metamask</h5>
            </div>
            <div style={{float:'right',display:'flex'}}>
              <p className='addtxt'>{wltadd}</p>
              <Button className='copybtn' onClick={() => copy(walletAddress)}>
            <BiCopy style={{color:"gray",width:24,height: 24}}/>
            </Button>
</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button  className="discconnectbtn" onClick={handledisconnect}>
            Disconnect Wallet
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default DisconnectModal;
