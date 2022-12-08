import React,{useState} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import './Token.css'
import {IoIosArrowDropdown} from 'react-icons/io'
import Holder from './Holder'
const Token = () => {
  const [apiResponse,setApiResponse]=useState([1,2,3]);
  return (
    <Col lg="10">
    <div>
        <div className="ScrollView___StyledDiv-sc-1hhoqwn-0 kAKfyo Main___StyledScrollView-sc-1n64cjc-0 khTbCh"><div className="Layout___StyledDiv-sc-16bvfls-0 iWQXfM">
        <div className="Header___StyledDiv-euryjq-0 gqtaUg">
        <div className="Header___StyledDiv2-euryjq-1 buHkSD">
        <div className="Header___StyledDiv3-euryjq-2 ggKRzR">
        <div className="AppHeader___StyledDiv-sc-93vu3o-0 DDweF">
        <h1 className="AppHeader___StyledH-sc-93vu3o-1 eYhhVM">Tokens</h1>
        <div className="AppHeader___StyledDiv2-sc-93vu3o-2 llJlFi">
        <span className="Tag___StyledSpan-sc-875dmt-0 gAPLlj"><span className="Tag___StyledSpan3-sc-875dmt-2 diOTMj">SAT</span></span></div>
        </div></div>
        <div className="Header___StyledDiv4-euryjq-3 buzsVL">
        <button type="button" className="ButtonBase___StyledButton-ur1q76-0 dyoeSq Button___StyledButtonBase-sc-8npd5h-0 dooIql">Add tokens</button></div></div></div>
        <div className="Split___StyledDiv3-sc-19nz0vo-2 bRqLMh">
        <div className="Split___StyledDiv-sc-19nz0vo-0 ioMDjR">
        <div className="Box___StyledDiv-sc-54p6u6-0 hlzMyq">
        <div className="Box___StyledDiv2-sc-54p6u6-2 izhtiA">
        <div><table className="TableView___StyledTable-aczwu3-0 gdEOJi"><thead><tr>
        <th colSpan="1" className="TableView___StyledTh-aczwu3-1 ewmXzz">Holder</th>
        <th colSpan="1" className="TableView___StyledTh-aczwu3-1 dLAahK">Balance</th>
        <th colSpan="1" className="TableView___StyledTh-aczwu3-1 hffjhH"></th></tr></thead>
        <tbody>
            {apiResponse.map((value)=>{
                return <Holder/>
            })}
        </tbody></table></div></div></div></div>
        <div className="Split___StyledDiv2-sc-19nz0vo-1 iQDIvc">
        <section className="Box___StyledDiv-sc-54p6u6-0 hlzMyq">
        <h1 className="Box___StyledH-sc-54p6u6-1 bFtHPY">Token Info</h1>
        <div className="Box___StyledDiv2-sc-54p6u6-2 iRIOWC">
        <div><ul>
        <li className="InfoBoxes___StyledLi-sc-xehz92-0 jmucud">
        <span>Total supply</span><span>:</span><strong>50</strong></li>
        <li className="InfoBoxes___StyledLi-sc-xehz92-0 jmucud"><span>Transferable</span><span>:</span><strong>Yes</strong></li><li className="InfoBoxes___StyledLi-sc-xehz92-0 jmucud"><span>Token</span><span>:</span>
        <button type="button" title="satToken (SAT) − 0x5d0253edf2f95dd452499a5aeed7b08517767461" className="ButtonBase___StyledButton-ur1q76-0 dyoeSq BadgeBase___StyledButtonBase-sc-4zaahn-0 gUcHvT">
        <div className="BadgeBase___StyledDiv-sc-4zaahn-1 ioSKLX">
        <span className="BadgeBase___StyledSpan-sc-4zaahn-2 iYgkeC">
        <span className="TokenBadge___StyledSpan-sc-7bvdqo-0 gnTAfx">
        <span className="TokenBadge__Name-sc-7bvdqo-2 lfCpHY">satToken</span>
        <span className="TokenBadge___Symbol-sc-7bvdqo-3 hyUPFs">(SAT)</span>
        </span></span></div></button></li></ul></div></div></section>
        <section className="Box___StyledDiv-sc-54p6u6-0 hlzMyq">
        <h1 className="Box___StyledH-sc-54p6u6-1 bFtHPY">Ownership Distribution</h1>
        <div className="Box___StyledDiv2-sc-54p6u6-2 iRIOWC">
        <div>
        <section>
        <div className="Distribution___StyledDiv-r4l1i4-0 eGZHkQ">
        <h1 className="Distribution___StyledH-r4l1i4-1 bLsbJu">Tokenholder stakes</h1>
        </div><div className="Distribution___StyledDiv2-r4l1i4-2 gYCUhM">
        <div title="0x64400d490418e01ece3d23960a739302e8b9b251: 52%" style={{width: "52%", background: "rgb(62, 123, 246)"}}>

        </div>
        <div title="0x12c79500a53c98f8954a69526f1c1daff393c477: 32%" style={{width: "32%", background: "rgb(240, 134, 88)"}}></div>
        <div title="0x5419dae70e61c7143a162c2663904883e7f52d89: 16%" ></div></div>
        <ul className="Distribution___StyledUl-r4l1i4-3 cLFoof">
        <li className="Distribution___StyledLi-r4l1i4-4 hGvsyA">
        
        <div className="Distribution___StyledDiv3-r4l1i4-5 bzzuhP">
        <div className="Distribution___StyledDiv6-r4l1i4-8 kLbLM" style={{background: "rgb(62, 123, 246)"}}></div>
        <div className="Distribution___StyledDiv4-r4l1i4-6 dnSHBN">
        <div className="InfoBoxes___StyledDiv-sc-xehz92-1 bthnIk">
        <button type="button" title="0x64400d490418e01ece3d23960a739302e8b9b251" className="ButtonBase___StyledButton-ur1q76-0 dyoeSq BadgeBase___StyledButtonBase-sc-4zaahn-0 gUcHvT">
        <div className="BadgeBase___StyledDiv-sc-4zaahn-1 ioSKLX">
        <div className="IdentityBadge___StyledDiv-q71pax-0 cXVMUO">
        <div size="24" radius="0" className="EthIdenticon__Main-sc-1h8gagr-0 ftwaOJ">
        <div size="30" className="EthIdenticon__BlockiesScaling-sc-1h8gagr-2 cXyJCK">
        <div className="EthIdenticon__BlockiesOpacity-sc-1h8gagr-1 ifVHmz">
        <canvas className="identicon" width="30" height="30" style={{width: "30px", height: "30px"}}></canvas>
        </div></div></div></div><span className="BadgeBase___StyledSpan-sc-4zaahn-2 gTsHRw">0x6440…b251</span></div></button></div></div></div>
        <div className="Distribution___StyledDiv5-r4l1i4-7 eTteKa"><strong>52%</strong></div></li>
        <li className="Distribution___StyledLi-r4l1i4-4 hGvsyA">
        <div className="Distribution___StyledDiv3-r4l1i4-5 bzzuhP">
        <div className="Distribution___StyledDiv6-r4l1i4-8 kLbLM" style={{background: "rgb(240, 134, 88)"}}></div>
        <div className="Distribution___StyledDiv4-r4l1i4-6 dnSHBN"><div className="InfoBoxes___StyledDiv-sc-xehz92-1 bthnIk">
        <button type="button" title="0x12c79500a53c98f8954a69526f1c1daff393c477" className="ButtonBase___StyledButton-ur1q76-0 dyoeSq BadgeBase___StyledButtonBase-sc-4zaahn-0 gUcHvT">
        <div className="BadgeBase___StyledDiv-sc-4zaahn-1 ioSKLX"><div className="IdentityBadge___StyledDiv-q71pax-0 cXVMUO">
        <div size="24" radius="0" className="EthIdenticon__Main-sc-1h8gagr-0 ftwaOJ"><div size="30" className="EthIdenticon__BlockiesScaling-sc-1h8gagr-2 cXyJCK">
        <div className="EthIdenticon__BlockiesOpacity-sc-1h8gagr-1 ifVHmz"><canvas className="identicon" width="30" height="30" style={{width: "30px", height: "30px"}}></canvas></div></div></div></div>
        <span className="BadgeBase___StyledSpan-sc-4zaahn-2 iTJfPc">YOU</span></div></button></div></div></div>
        <div className="Distribution___StyledDiv5-r4l1i4-7 eTteKa"><strong>32%</strong></div></li>
        <li className="Distribution___StyledLi-r4l1i4-4 hGvsyA">
        <div className="Distribution___StyledDiv3-r4l1i4-5 bzzuhP">
        <div className="Distribution___StyledDiv6-r4l1i4-8 kLbLM" style={{background: "rgb(135, 101, 89)"}}></div>
        <div className="Distribution___StyledDiv4-r4l1i4-6 dnSHBN">
        <div className="InfoBoxes___StyledDiv-sc-xehz92-1 bthnIk">
        <button type="button" title="0x5419dae70e61c7143a162c2663904883e7f52d89" className="ButtonBase___StyledButton-ur1q76-0 dyoeSq BadgeBase___StyledButtonBase-sc-4zaahn-0 gUcHvT">
        <div className="BadgeBase___StyledDiv-sc-4zaahn-1 ioSKLX">
        <div className="IdentityBadge___StyledDiv-q71pax-0 cXVMUO">
        <div size="24" radius="0" className="EthIdenticon__Main-sc-1h8gagr-0 ftwaOJ">
        <div size="30" className="EthIdenticon__BlockiesScaling-sc-1h8gagr-2 cXyJCK">
        <div className="EthIdenticon__BlockiesOpacity-sc-1h8gagr-1 ifVHmz">
        <canvas className="identicon" width="30" height="30" style={{width: "30px",height: "30px"}}></canvas></div></div></div></div>
        <span className="BadgeBase___StyledSpan-sc-4zaahn-2 ijtGag">abc</span></div></button></div></div></div>
        <div className="Distribution___StyledDiv5-r4l1i4-7 eTteKa"><strong>16%</strong></div></li>
        </ul></section></div></div>
        </section></div></div>
        </div></div>
    </div>
    </Col>
  )
}
export default Token;
