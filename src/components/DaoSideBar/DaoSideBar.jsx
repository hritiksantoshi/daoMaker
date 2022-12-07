import React from "react";
import "./DaoSideBar.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import home from "../../assets/app-home.svg"
import tokenImage from "../../assets/icon.svg"
import Voting from "../../assets/voting.svg";
import finance from "../../assets/finance.svg"
const DaoSideBar = () => {
  return (
    <Col lg="2" className="sidebar">
    <div className="sidediv">
    <h1 className="txt">Apps</h1>
    <div className="menulist">
      <ul style={{'listStyle': 'none',paddingTop:0,paddingLeft:21}}>
        <li className="listmenu">
          <Link to="/dapp" style={{ textDecoration: 'none' }}>
             <div className="button">
              <img src={home} style={{width:24,height:24,borderRadius:4}}/>
              <span className="iconTxt">Home</span>
             </div>
          </Link>
        </li>
        <li  className="listmenu">
          <Link to="/dapp/2" style={{ textDecoration: 'none' }}>
          <div className="button">
              <img src={tokenImage} style={{width:24,height:24,borderRadius:4}}/>
              <span className="iconTxt">Tokens</span>
             </div>
          </Link>
        </li>
        <li  className="listmenu">
          <Link to="/dapp/3" style={{ textDecoration: 'none' }}>
          <div className="button">
              <img src={Voting} style={{width:24,height:24,borderRadius:4}}/>
              <span className="iconTxt">Voting</span>
             </div>
          </Link>
        </li>
        <li >
          <Link to="" style={{ textDecoration: 'none' }}>
          <div className="button">
              <img src={finance} style={{width:24,height:24,borderRadius:4}}/>
              <span className="iconTxt">Finance</span>
             </div>
          </Link>
        </li>
      </ul>
      </div>
      </div>
    </Col>
  );
};

export default DaoSideBar;
