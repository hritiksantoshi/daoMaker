import React, { useState , useEffect } from "react";
import newOrg from "../../assets/action-create.2a5239ed.png";
import openExisting from "../../assets/open_existing.png";
import logo from "../../assets/logo.png";
import "./Welcome.css";
import { Modal, Button } from "react-bootstrap";
import wallet from "../../assets/wallet.png";
import { Link, useNavigate } from "react-router-dom";
import ConnectionModal from "../../components/connectionModal/ConnectionModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getBalance,isWalletConnected,connectMetamask} from "../../config";
import { useContext } from "react";
import { StepContext } from "../../App";
import DisconnectModal from "../../components/DisconnectModal/DisconnectModal";
function Welcome() {
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

  const navigate = useNavigate();


  const disconnectWallet = () => {
    console.log("wallet disconnected");
    localStorage.removeItem("isWalletConnected");
    setWalletAddress("");
  };

  const redirectPage = async () => {
    console.log(walletAddress);
    if (walletAddress === "" || walletAddress === null) {
      toast.error("Connect your Metamask wallet !");
    } else {
      const addressBalance = await getBalance(walletAddress);
      console.log(addressBalance);
      if (addressBalance > 0.2) {
        navigate("token");
      } else {
        toast.error("Atleast 0.2 eth required.");
      }
    }
  };

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
    <>
      <div className="container">
        <Link>
          <img src={logo} className="logo" alt="not found" />
        </Link>
        <div className="buttonContainer">
          {walletAddress ? (
            <>
            <Button
              type="button"
              className="welbtn"
              onClick={() => {
                setShowDiss(!showDiss);
              }}
            >
              <img src={wallet} style={{ width: 24, height: 24 }} />
              <span className="walletadd">{displayWalletAddress}</span>
              <span className="Button">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"
                  ></path>
                </svg>
              </span>
            </Button>
             <DisconnectModal/> 
             </>    
          ) : (
            <>
             
              <div className="connectWallet">
                <button
                  type="button"
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="walletbuttonCss"
                  style={{ minWidth: "40px", margin: "0px 16px" }}
                >
                  <span className="spanClass">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"
                      ></path>
                    </svg>
                  </span>
                  Connect Account
                </button>
              </div>
            </>
          )}
        </div>
        <ConnectionModal />
        <div className="insideContainer">
          <header className="header">
            <h1 className="headerHeading">Welcome To DAO Maker!</h1>
            <div className="headerDiv">
              Create your own organization in a few minutes!
            </div>
          </header>
          <div>
            <Link onClick={redirectPage} className="hrefLink">
              <div className="listSection">
                <section className="sectionDiv">
                  <div>
                    <img src={newOrg} className="imageCss" alt="not found" />
                  </div>
                  <div className="listDetails">
                    <h1 className="listHeading">Create an organization.</h1>
                    <p style={{ textDecoration: "none" }}>
                      Start your own organization.
                    </p>
                  </div>
                </section>
              </div>
            </Link>
            <div className="listSection">
              <section className="sectionDiv">
                <div>
                  <img
                    src={openExisting}
                    className="imageCss"
                    alt="not found"
                  />
                </div>
                <div className="listDetails">
                  <h2 className="listHeading">
                    Open an existing organization.
                  </h2>
                </div>
              </section>
            </div>
          </div>
          <p className="paraLast">
            Do you need more information about Aragon?
            <a
              href="https://aragon.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="hrefLink"
            >
              Visit our homepage
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Welcome;
