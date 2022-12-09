import React, { useState } from 'react'
import { OverlayTrigger ,Col} from 'react-bootstrap';
import { IoIosArrowDropdown } from 'react-icons/io';
import { statusPopover } from '../votingtemp/VotingPopover';
import './FinanceComp.css';
import '../votingtemp/VotingDetails.css';
import FinanceTransaction from './FinanceTransaction';
function FinanceComp() {
    const[response,setResponse]=useState([1,2,3]);
  return (
    <Col lg="10">
    <div>
        
        <div className="Main___StyledScrollView-sc-1n64cjc-0 hZYLiF ScrollView___StyledDiv-sc-1hhoqwn-0 gZFkef">
        
        <div className="Layout___StyledDiv-sc-16bvfls-0 iTueea">
        <div className="Header___StyledDiv-euryjq-0 eTEUIa">
        <div className="Header___StyledDiv2-euryjq-1 cyZZaq">
        <div className="Header___StyledDiv3-euryjq-2 hyGpzQ">
        <h1 className="Header___StyledH-euryjq-4 ejqTJG">Finance</h1></div>
        <div className="Header___StyledDiv4-euryjq-3 eIkgfQ">
        <button type="button" className="Button___StyledButtonBase-sc-8npd5h-0 iSFgBd ButtonBase___StyledButton-ur1q76-0 gUstKE">New transfer</button>
        </div></div></div>
        <section className="Box___StyledDiv-sc-54p6u6-0 cZRmoC">
        <h1 className="Box___StyledH-sc-54p6u6-1 bknuWX">Token Balances</h1>
        <div className="Box___StyledDiv2-sc-54p6u6-2 jizRDX">
        <div>
        <div className="Balances___StyledDiv-sc-1bmtpxn-0 hsBXyI">
        <div className="Balances___StyledDiv2-sc-1bmtpxn-1 heqIAM">
        <div className="Balances___StyledDiv3-sc-1bmtpxn-2 kVLTtB">No token balances yet.</div></div></div></div></div></section>
        <div className="Box___StyledDiv-sc-54p6u6-0 cZRmoC">
        <div className="Box___StyledDiv2-sc-54p6u6-2 jizRDX">
        <div>
        <div className="DataView___StyledDiv-sc-49otbs-0 dGpXSv">
        <div className="Transfers___StyledDiv-sc-13g5zdb-1 fmDerI">
        <div className="Transfers___StyledDiv2-sc-13g5zdb-2 jPojiV">Transfers</div>
        <div><button type="button" className="Button___StyledButtonBase-sc-8npd5h-0 iYGvy ButtonBase___StyledButton-ur1q76-0 deWYNw"><span className="Button___StyledSpan-sc-8npd5h-1 hTqOXo"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.902 12.17a.646.646 0 00-.646.647v4.903a.989.989 0 01-.988.987H6.28a.989.989 0 01-.987-.987V8.732c0-.545.443-.988.987-.988h4.903a.646.646 0 100-1.293H6.28A2.283 2.283 0 004 8.731v8.989A2.283 2.283 0 006.28 20h8.988a2.283 2.283 0 002.28-2.28v-4.903a.646.646 0 00-.645-.646zM19.354 4H14.45a.646.646 0 100 1.293h4.256v4.256a.646.646 0 001.293 0V4.646A.646.646 0 0019.354 4z"></path><path fill="currentColor" d="M19.81 4.19a.646.646 0 00-.913 0l-8.988 8.988a.646.646 0 00.914.914l8.988-8.988a.646.646 0 000-.914z"></path></svg></span>Export</button></div></div>
        <div className="TransfersFilters___StyledDiv-sc-pby1bs-0 ffJsvW">
        <OverlayTrigger trigger="click" placement="right" overlay={statusPopover}>
       <button type="button" className="DropDown___StyledButtonBase-sc-17zpefi-0 vJVQb ButtonBase___StyledButton-ur1q76-0 deWYNw">
       <div className="DropDown___StyledDiv-sc-17zpefi-1 fGExKQ"  >Type</div>
       <IoIosArrowDropdown/>
       </button>
        </OverlayTrigger>
        <div className="DropDown___StyledDiv2-sc-17zpefi-3 ieczDL">
        <div className="DropDown___StyledDiv3-sc-17zpefi-4 gCddCd">
        <div className="DropDown___StyledDiv4-sc-17zpefi-5 daNBdV">Type</div>
        <ul className="DropDown___StyledUl-sc-17zpefi-6 eIKyho"><li>
        <button type="button" className="DropDown___StyledButtonBase2-sc-17zpefi-7 eThEDw ButtonBase___StyledButton-ur1q76-0 biZGrf">All</button></li>
        <li><button type="button" className="DropDown___StyledButtonBase2-sc-17zpefi-7 eThEDw ButtonBase___StyledButton-ur1q76-0 biZGrf">Incoming</button></li>
        <li><button type="button" className="DropDown___StyledButtonBase2-sc-17zpefi-7 kGlLQN ButtonBase___StyledButton-ur1q76-0 biZGrf">Outgoing</button></li>
        </ul></div></div>
        <OverlayTrigger trigger="click" placement="right" overlay={statusPopover}>
       <button type="button" className="DropDown___StyledButtonBase-sc-17zpefi-0 vJVQb ButtonBase___StyledButton-ur1q76-0 deWYNw">
       <div className="DropDown___StyledDiv-sc-17zpefi-1 fGExKQ"  >Token</div>
       <IoIosArrowDropdown/>
       
       </button>
        </OverlayTrigger>
        <div className="DropDown___StyledDiv2-sc-17zpefi-3 ieczDL">
        <div className="DropDown___StyledDiv3-sc-17zpefi-4 gCddCd">
        <div className="DropDown___StyledDiv4-sc-17zpefi-5 daNBdV">Token</div>
        <ul className="DropDown___StyledUl-sc-17zpefi-6 eIKyho"><li>
        <button type="button" className="DropDown___StyledButtonBase2-sc-17zpefi-7 eThEDw ButtonBase___StyledButton-ur1q76-0 biZGrf">All tokens</button></li>
        <li><button type="button" className="DropDown___StyledButtonBase2-sc-17zpefi-7 kGlLQN ButtonBase___StyledButton-ur1q76-0 biZGrf">ETH</button></li></ul></div></div>
        <div><button type="button" className="ButtonBase___StyledButton-ur1q76-0 gUstKE">
        <div className="Labels___StyledDiv-sc-1is9uv6-0 cDKqzW">
        <div className="Labels___StyledDiv2-sc-1is9uv6-1 fByhUr">
        <div className="Labels___StyledDiv3-sc-1is9uv6-2 eaNajg">Start day</div>
        <div className="Labels___StyledDiv4-sc-1is9uv6-3 kxCTxZ">|</div>
        <div className="Labels___StyledDiv5-sc-1is9uv6-4 fHVlOr">End day</div></div>
        <div className="Labels___StyledDiv6-sc-1is9uv6-5 cxrmQc">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" _css10="#8FA4B5" className="Labels___StyledIconCalendar-sc-1is9uv6-6 bRBnEW"><path fill="currentColor" fillRule="evenodd" d="M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v12.161c0 .33-.267.598-.597.598H4.597A.597.597 0 014 18.354V6.194zm1.193.597v10.967h13.613V6.79H5.194z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v3.722c0 .33-.267.597-.597.597H4.597A.597.597 0 014 9.915V6.193zm1.193.597v2.527h13.613V6.79H5.194z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M7.783 4c.33 0 .597.267.597.597v2.527a.597.597 0 11-1.194 0V4.597c0-.33.267-.597.597-.597zm8.499 0c.33 0 .597.267.597.597v2.527a.597.597 0 11-1.194 0V4.597c0-.33.267-.597.597-.597z" clipRule="evenodd"></path></svg></div></div></button></div></div></div><table className="TableView___StyledTable-aczwu3-0 dJrdkK"><thead>
        <tr><th colSpan="1" className="TableView___StyledTh-aczwu3-1 bNMroJ">Date</th><th colSpan="1" className="TableView___StyledTh-aczwu3-1 dXlcUR">Source/recipient</th><th colSpan="1" className="TableView___StyledTh-aczwu3-1 dXlcUR">Reference</th><th colSpan="1" className="TableView___StyledTh-aczwu3-1 bBaFMQ">Amount</th><th colSpan="1" className="TableView___StyledTh-aczwu3-1 dskhUK"></th></tr></thead>
        <tbody>
        {response.map((value)=>{
            return <FinanceTransaction/>
        })}
        </tbody></table></div></div></div></div></div>
    </div>
    </Col>
  )
}

export default FinanceComp