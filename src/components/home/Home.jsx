import "./Home.css";
import AssignToken from "../../assets/assign-tokens.png";
import VoteImage from "../../assets/create-new-vote.png";
import checkFinance from "../../assets/check-finance.png";
import NewPayment from "../../assets/new-payment.png";
import eagleBackImage from "../../assets/eagle.svg";
import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Col lg="10" className="home">
      <div>
        <div>
          <div className="messageDiv">
            <h1 className="messageHeading">What do you want to do?</h1>
            <div className="CardLayout">
              <Link className="cardlink" to={"/dapp/2"}>
                <div role="button" tabindex="0" className="ButtonB">
                  <img src={AssignToken} alt="" width="184" height="145" />
                  <p className="HomeStyled">Assign Tokens</p>
                </div>
              </Link>
              <Link className="cardlink" to={"/dapp/3"}>
                <div role="button" tabindex="0" className="ButtonB">
                  <img src={VoteImage} alt="" width="184" height="145" />
                  <p className="HomeStyled">Vote</p>
                </div>
              </Link>
              <Link className="cardlink" to={"/dapp/4"}>
                <div role="button" tabindex="0" className="ButtonB">
                  <img src={checkFinance} alt="" width="184" height="145" />
                  <p className="HomeStyled">Check Finance</p>
                </div>
              </Link>
              <Link className="cardlink" to={"/dapp/4"}>
                <div role="button" tabindex="0" className="ButtonB">
                  <img src={NewPayment} alt="" width="184" height="145" />
                  <p className="HomeStyled">New Payment</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Home;
