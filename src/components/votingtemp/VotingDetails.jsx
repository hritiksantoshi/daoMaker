import React,{useState,useContext} from 'react'
import { Button, OverlayTrigger } from 'react-bootstrap';
import {IoIosArrowDropdown} from 'react-icons/io'
import {SlCalender} from 'react-icons/sl';
import {StepContext} from "../../App"
import './VotingDetails.css';
import {outcomePopover,statusPopover,appPopover} from './VotingPopover';
import VotingCards from './VotingCards';
import { Col, Container, Row } from "react-bootstrap";
 
function VotingDetails() {
    const {proposal,setProposal} = useContext(StepContext);
    const [response,setResponse]=useState([2]);
  return (
    <Col lg="10">
    <div className='vote'>
        <div className="Header___StyledDiv-euryjq-0 eTEUIb">
        <div className="Header___StyledDiv2-euryjq-1 cyZZaq">
        <div className="Header___StyledDiv3-euryjq-2 hyGpzQ">
        <h1 className="Header___StyledH-euryjq-4 ejqTJG" style={{paddingLeft:'22px'}}>Voting</h1></div>
        <div className="Header___StyledDiv4-euryjq-3 eIkgfQ"  style={{paddingRight:'22px'}}>
        <button type="button" className="Button___StyledButtonBase-sc-8npd5h-0 iSFgBd ButtonBase___StyledButton-ur1q76-0">New vote</button>
        </div></div></div>
        
       <div className="Votes___StyledDiv-sc-ofw4ve-0 fqeUEc">
       <OverlayTrigger trigger="click" placement="right" overlay={statusPopover}>
       <button type="button" className="DropDown___StyledButtonBase-sc-17zpefi-0 vJVQb ButtonBase___StyledButton-ur1q76-0 deWYNw">
       <div className="DropDown___StyledDiv-sc-17zpefi-1 fGExKQ"  >Status</div>
       <IoIosArrowDropdown/>
       
       </button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={outcomePopover}>
       <button type="button" className="DropDown___StyledButtonBase-sc-17zpefi-0 vJVQb ButtonBase___StyledButton-ur1q76-0 deWYNw">
       <div className="DropDown___StyledDiv-sc-17zpefi-1 fGExKQ">Outcome</div>
       <IoIosArrowDropdown/>
       </button>
       </OverlayTrigger>
       <OverlayTrigger trigger="click" placement="right" overlay={appPopover}>
       <button type="button" className="DropDown___StyledButtonBase-sc-17zpefi-0 vJVQb ButtonBase___StyledButton-ur1q76-0 deWYNw">
       <div className="DropDown___StyledDiv-sc-17zpefi-1 fGExKQ">App</div>
       <IoIosArrowDropdown/>
       </button>
       </OverlayTrigger>
       
       <div><button type="button" className="ButtonBase___StyledButton-ur1q76-0 gUstKE">
       <div className="Labels___StyledDiv-sc-1is9uv6-0 cDKqzW">
       <div className="Labels___StyledDiv2-sc-1is9uv6-1 fByhUr">
       <div className="Labels___StyledDiv3-sc-1is9uv6-2 eaNajg">Start day</div>
       <div className="Labels___StyledDiv4-sc-1is9uv6-3 kxCTxZ">|</div>
       <div className="Labels___StyledDiv5-sc-1is9uv6-4 fHVlOr">End day</div></div>
       <div className="Labels___StyledDiv6-sc-1is9uv6-5 cxrmQc">
<SlCalender/>
       </div></div></button></div></div>
    
    <div style={{display:'flex'}}>{proposal.map((value,index)=>{
        return <div style={{margin: '20px 20px 20px 20px'}}><VotingCards value={value}/></div>
    })}</div>
    </div>
    </Col>
  )
}

export default VotingDetails;