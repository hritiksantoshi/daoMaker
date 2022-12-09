import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import coinbase from "../../assets/coinbase.png";
import metamask from "../../assets/metamask.webp";
import "./ConnectionModal.css";
import { connectMetamask } from "../../config";
import { useContext } from "react";
import { StepContext } from "../../App";

function ConnectionModal(props) {

  const {show, setShow , setWalletAddress, setDisplayWalletAddress } = useContext(StepContext);
  const handleClose = () => {
    setShow(false);
  };
  const connect = async () => {
    try {
      const account = await connectMetamask();
      console.log(account,"fhf");
      localStorage.setItem("wltaddress",account);
      if (account.length === 42) {
        setShow(false);
        setWalletAddress(account);
        const accountDisplay =
          account.slice(0, 5) + "...." + account.slice(account.length - 4);
        setDisplayWalletAddress(accountDisplay);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="modal">
      <Modal
        className="connModal"
        backdrop="static"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Use Account Form</Modal.Title>
          <hr />
        </Modal.Header>
        <Modal.Body>
          <div className="allWallets">
            <Button
              style={{ backgroundColor: "white", borderColor: "white" }}
              onClick={connect}
            >
              <div className="wallet">
                <div className="metamaskWallet">
                  <div>
                    <img
                      className="walletImage"
                      src={metamask}
                      style={{ width: 40, height: 40 }}
                      alt="not found"
                    />
                  </div>
                  <div className="walletName">
                    <p style={{ textDecoration: "none", color: "black" }}>
                      Metamask
                    </p>
                  </div>
                </div>
              </div>
            </Button>
            <Button style={{ backgroundColor: "white", borderColor: "white" }}>
              <div className="coinbaseWallet">
                <div className="wallet">
                  <div>
                    <img
                      className="walletImage"
                      src={coinbase}
                      style={{ width: 40, height: 40 }}
                      alt="not found"
                    />
                  </div>
                  <div className="walletName">
                    <p style={{ textDecoration: "none", color: "black" }}>
                      Coinbase
                    </p>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer className="connectWalletFooter">
          <a href="/">Don't have an account?</a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConnectionModal;
