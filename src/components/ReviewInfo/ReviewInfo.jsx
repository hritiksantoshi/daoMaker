import './ReviewInfo.css';
import React, { useContext } from 'react'
import VotingImage from '../../assets/votingImage.svg';
import TokenManager from '../../assets/tokenImage.jpg';
import Accordion from 'react-bootstrap/Accordion';
import { BiArrowBack } from "react-icons/bi";
import { StepContext } from "../DaoForm";
import {deploy} from "../../utils/deploy"
function ReviewInfo() {
    const { data, setData, currentStep, setStep ,loading,setloading,loader} = useContext(StepContext);
    const tokendeploy = async () => {
        try {
            setStep(currentStep+1);
        //   const res = await deploy(data.tokenName,data.tokenSymbol,data.name,data.votingPercentage,setloading);
          
            window.location.href='http://localhost:3000/dapp';
          
         
        } catch (error) {
          console.log(error);
        }  
      }

    return (
       
            <div className='reviewDiv'>
                <header className='revHeader'>

                    <h1 class="HeaderTxt">Review information</h1>
                    <div class="Headerdesc">Have one last look at your settings below</div>
                </header>
                <Accordion className='acc'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>

                            General Info

                        </Accordion.Header>

                        <Accordion.Body>
                            <div className="ReviewScreen">
                                <section className="ReviewSc">
                                    <h1 className="Reviewtitle">Organization template</h1>
                                    <div className="Rev">Company</div>
                                </section>
                                <section className="ReviewScr">
                                    <h1 className="Reviewtitle">Name</h1>
                                    <div className="Rev">{data.name}</div>
                                </section>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className="accTitle">
                                <div className="Badge">
                                    <span className="AppBadge"></span>
                                    <span class="VotingBadge">Voting</span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className="ReviewScreen">
                                <section className="ReviewSc">
                                    <h1 className="Reviewtitle">Support %</h1>
                                    <div className="Rev">{data.votingPercentage} %</div>
                                </section>
                                <section className="ReviewScr">
                                    <h1 className="Reviewtitle">Vote duration</h1>
                                    <div className="Rev">{data.votingPeriod.day} day</div>
                                </section>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className="accTitle"><div className="Badge">
                                <span className="TokenBadge"></span>
                                <span class="VotingBadge">Tokens</span>
                            </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className="ReviewScreen">
                                <section className="ReviewSc">
                                    <h1 className="Reviewtitle">Token name & symbol</h1>
                                    <div className="Rev">{data.tokenName} ({data.tokenSymbol}) </div>
                                </section>
                                <section className="ReviewScr">
                                    <h1 className="Reviewtitle">Tokenholder #1</h1>
                                    <div className="Rev">{data.walletAddress} {data.balanceInput} {data.tokenSymbol}</div>
                                </section>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <section className="Info">Carefully review your configuration settings. If something doesn’t look right, you can always go back and change it before launching your organization.</section>
                <div className="Navigation">
                    <button type="button" className="ButtonBase" onClick={() => setStep(currentStep - 1)}>
                        <span className="Button"><BiArrowBack color="rgb(8, 190, 229)" />
                        </span>Back</button>
                    <button type="submit" className="launchBtn" onClick={tokendeploy}>Launch your organization</button></div>
            </div>
       
    )
}

export default ReviewInfo;