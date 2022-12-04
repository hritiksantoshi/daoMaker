import React, { useState } from 'react';
import newOrg from '../../assets/action-create.2a5239ed.png';
import openExisting from '../../assets/open_existing.png';
import logo from '../../assets/logo.png';
import './Welcome.css';
import { Link } from 'react-router-dom';
import ConnectionModal from '../../components/connectionModal/ConnectionModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getBalance} from '../../config';
function Welcome() {
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
        <>
            <div className='container'>
                <Link><img src={logo} className='logo' alt='not found' /></Link>
                <div className="buttonContainer">
                  {(accountAddress !=='' && accountAddress !==null)?<div className='accountAddressDisplay'><p>{accountAddressDisplay}</p><button onClick={disconnectWallet} style={{height:'20px' }}>Disconnect</button></div>: 
                  <>
                  <div className="goerliButton">
                        <button type="button" className="goerliButtonCss">
                            <section className="goerliSection">Goerli</section>
                        </button></div> <div className="connectWallet">
                        <button type="button" onClick={()=>{setShow(!show)}} className="walletbuttonCss" style={{ minWidth: "40px", margin: "0px 16px" }}>
                            <span className="spanClass">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"></path>
                                </svg>
                            </span>Connect Account</button>
                    </div></>}</div>
                    <ConnectionModal show={show} setShow={setShow} setAccountAddress={setAccountAddress} setAccountAddressDisplay={setAccountAddressDisplay}/>
                <div className='insideContainer'>
                    <header className='header'>
                        <h1 className='headerHeading'>Welcome To DAO Maker!</h1>
                        <div className='headerDiv'>Create your own organization in a few minutes!</div>
                    </header>
                    <div className='section'>
                    <Link onClick={redirectPage} >
                        <div className='listSection'>
                            <section className='sectionDiv'>
                                <div>
                                    <img src={newOrg} className='imageCss' alt='not found' />
                                </div>
                                <div className='listDetails'>
                                    <h2 className='listHeading'>Create an organization.</h2>
                                    <p style={{textDecoration:'none'}}>Start your own organization.</p>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <div className='listSection'>
                            <section className='sectionDiv'>
                                <div>
                                    <img src={openExisting} className='imageCss' alt='not found' />
                                </div>
                                <div className='listDetails'>
                                    <h2 className='listHeading'>Open an existing organization.</h2>
                                </div>
                            </section>
                        </div>
                    </div>
                    <p className="paraLast">Do you need more information about Aragon?
                        <a href="https://aragon.org/" rel="noopener noreferrer" target="_blank" className="hrefLink">Visit our homepage</a>
                    </p>
                </div>
            </div>
    <ToastContainer/>

        </>
    )
}

export default Welcome;