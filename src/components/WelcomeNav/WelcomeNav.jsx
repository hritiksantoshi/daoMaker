import React, { useContext , useEffect} from "react";
import { StepContext } from "../../App";
import logo from "../../assets/logo.png";
import { isWalletConnected ,connectMetamask} from "../../config";
import "./WelcomeNav.css";
export const WelcomeNav = () => {
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
    <div className="mainNav">
      <div className="top"></div>
      <button type="button" title="Back to home" className="bth">
        <img src={logo} width="36" alt="" />
      </button>
      {walletAddress ? (
        <div className="btnDiv">
          <button
            type="button"
            className="ctdbtn"
            onClick={() => {
              setShowDiss(!showDiss);
            }}
          >
            <div className="nji">
              {/* <div className='bhu'>
     <canvas id="myCanvas" width="24" height="24"  />
     <div className="online"></div>
     </div> */}
              <div className="mlp">
                <div className="wltaddr">{displayWalletAddress}</div>
                <div className="connectedtxt">Connected to Goerli</div>
              </div>
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                className="Btnsvg"
              >
                <path
                  fill="currentColor"
                  d="M18.785 8.782a.725.725 0 00-1.038 0L12 14.632l-5.746-5.85a.725.725 0 00-1.039 0 .757.757 0 000 1.057l6.266 6.38a.726.726 0 001.038 0l6.266-6.38a.757.757 0 000-1.057z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      ) : (
        <div className="btnDiv">
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
      )}
    </div>
  );
};
