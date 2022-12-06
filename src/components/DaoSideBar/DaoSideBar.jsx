import React from "react";
import "./DaoSideBar.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const DaoSideBar = () => {
  return (
    <Col lg="2" className="bg-light">
    <h1 className="txt">Apps</h1>
      <ul style={{'list-style': 'none'}}>
        <li>
          <Link to="/dapp">HOME</Link>
        </li>
        <li>
          <Link to="/dapp/2">TOKENS</Link>
        </li>
        <li>
          <Link to="/dapp/2">VOTING</Link>
        </li>
        <li>
          <Link to="/dapp/2">FINANCE</Link>
        </li>
      </ul>
    </Col>
  );
};

export default DaoSideBar;
