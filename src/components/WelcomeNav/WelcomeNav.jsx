import React from 'react'
import logo from "../../assets/logo.png"
import "./WelcomeNav.css";
export const WelcomeNav = () => {
  return (
    <div className='mainNav'>
    <div className='top'></div>
    <button type="button" title="Back to home" className="bth">
    <img src={logo} width="36" alt=""/>
    </button>
    <div className='btnDiv'>
     <button type='button' className='ctdbtn'>
     <div className='nji'>
     {/* <div className='bhu'>
     <canvas id="myCanvas" width="24" height="24"  />
     <div className="online"></div>
     </div> */}
     <div className='mlp'>
     <div className="wltaddr">0x4724…b5a9</div>
     <div className="connectedtxt">Connected to Goerli</div>
     </div>
     <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="Btnsvg"><path fill="currentColor" d="M18.785 8.782a.725.725 0 00-1.038 0L12 14.632l-5.746-5.85a.725.725 0 00-1.039 0 .757.757 0 000 1.057l6.266 6.38a.726.726 0 001.038 0l6.266-6.38a.757.757 0 000-1.057z"></path></svg>
     </div>
     </button>
    </div>
    </div>
  )
}
