import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import coinbase from '../../assets/coinbase.png';
import metamask from '../../assets/metamask.webp'
import './ConnectionModal.css';
import {connectMetamask} from '../../config';

function ConnectionModal(props) {
  const { show, setShow ,setAccountAddress,setAccountAddressDisplay } = props;
  const handleClose = () => { setShow(false) }
  const connect = async () => {
    try {
      const account=await connectMetamask();
      console.log(account);
    
      if(account.length ===42){
        setShow(false);
        setAccountAddress(account);
        const accountDisplay=account.slice(0,3)+'....'+account.slice(account.length-3,);
        setAccountAddressDisplay(accountDisplay);
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <>
      <Modal className='modal right fade' show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Use Account Form</Modal.Title>
          <hr />
        </Modal.Header>
        <Modal.Body>
          <div className='allWallets'>
            <Button style={{ backgroundColor: 'white', borderColor: 'white' }} onClick={connect}>
              <div className='wallet'>
                <div className='metamaskWallet'>
                  <div >
                    <img className='walletImage' src={metamask} alt='not found' />
                  </div>
                  <div className='walletName'>
                    <p style={{ textDecoration: 'none', color: 'black' }}>Metamask</p>
                  </div>
                </div>
              </div>
            </Button>
            <Button style={{ backgroundColor: 'white', borderColor: 'white' }}>
              <div className='coinbaseWallet'>
                <div className='wallet'>
                  <div >
                    <img className='walletImage' src={coinbase} alt='not found' />
                  </div>
                  <div className='walletName'>
                    <p style={{ textDecoration: 'none', color: 'black' }}>Coinbase</p>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer className='connectWalletFooter'>
          <a href='/'>Don't have an account?</a>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConnectionModal;