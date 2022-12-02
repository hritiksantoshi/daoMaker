import React,{ useContext } from "react";
import "./TokenSetting.css";
import TokenImage from "../../assets/tokenImage.jpg";
import { AiFillQuestionCircle, AiOutlineDelete } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";

import { Row } from "react-bootstrap";
import { StepContext } from "../DaoForm";

function TokenSetting() {
    const { data, setData, currentStep , setStep } = useContext(StepContext);
  return (
      <div className="col-lg-10">
        <div className="insideContainer">
          <header className="header">
            <h1 className="headerHeading">Configure Template</h1>
            <div className="headerDiv">
              <span className="headerSpan">
                Choose your
                <span className="iconSpan">
                  <a role="button" className="headerAnchor">
                    <div className="headerDiv1">
                      <span
                        className="headerSpan1"
                        style={{ backgroundImage: `url(${TokenImage})` }}
                      ></span>
                      <span className="headerSpan2">Tokens</span>
                    </div>
                  </a>
                </span>
                settings below.
              </span>
            </div>{" "}
          </header>

          <div className="formContainer" style={{ width: "608px" }}>
            {/* <div className="TokenName" >
                        <label htmlFor="Field_30">
                            <div className="TokenNameDiv1">Token name<button type="button" title="What is Token Name?" className="Button1">
                        <AiFillQuestionCircle className='questionMark' color='#4444c1' size={20}/>
                        </button></div>
                        <input type="text" id="Field_30" placeholder="My Organization Token" className="tokenNameInput1" value=""/></label>
                        </div>
                        <div className="TokenSymbol">
                        <label htmlFor="Field_31">
                        <div className="TokenNameDiv2">Token symbol<button type="button" title="What is Token Symbol?" className="Button2">
                            <AiFillQuestionCircle className='questionMark' color='#4444c1' size={20}/>
                        </button></div>
                        <input type="text" id="Field_31" placeholder="MOT" className="tokenSymbolInput" value=""/></label>
                        </div> */}

            <div className="TokenName" style={{ width: "608px" }}>
              <label>
                <div className="TokenNameDiv1">
                  <div className="tokenHolderLabel1">
                    <div>Token name</div>
                    <div>Token Symbol</div>
                  </div>
                </div>
                <div>
                  <div className="accountAddress">
                    <div>
                      <div className="tokenAddress">
                        <input
                          type="text"
                          placeholder="Account address"
                          className="inputAddress"
                          value={data.tokenName} onChange={(e)=>setData({...data,tokenName:e.target.value})}
                          
                        />
                      </div>
                      <div className="balancesDiv" style={{}}>
                        <div className=""></div>
                      </div>
                    </div>
                    <div>
                      <input type="text" className="balanceInput" 
                         value={data.tokenBalance} onChange={(e)=>setData({...data,tokenBalance:e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <br />
            <div className="tokenHolderDetails" style={{ width: "608px" }}>
              <label>
                <div className="tokenHolderLabel">
                  <div className="tokenHolderLabel1">
                    <div>Token holders</div>
                    <div>Balances</div>
                  </div>
                </div>
                <div>
                  <div className="accountAddress">
                    <div>
                      <div className="tokenAddress">
                        <input
                          type="text"
                          placeholder="Account address"
                          className="inputAddress"
                          value={data.walletAddress} onChange={(e)=>setData({...data,walletAddress:e.target.value})}
                        />
                        <div className="deleteButtonDiv">
                          <span className="spanButton">
                            <button
                              type="button"
                              title="Remove"
                              className="deleteButton"
                            >
                              <span className="spanDeleteButton">
                                <AiOutlineDelete color="red" />
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <div className="balancesDiv" style={{}}>
                        <div className=""></div>
                      </div>
                    </div>
                    <div>
                      <input type="text" className="balanceInput"          
                      value={data.balanceInput} onChange={(e)=>setData({...data,balanceInput:e.target.value})}
 />
                    </div>
                  </div>
                </div>
                <button type="button" className="addMoreAddress">
                  <span className="addMoreSpan">
                    <GrAdd color="blue" className="AddIcon" />
                  </span>
                  Add more
                </button>
              </label>
            </div>

            <br />
            <section className="NoteForUser">
              These settings will determine the name and symbol of the token
              that will be created for your organization. Add members to define
              the initial distribution of this token.
            </section>
            <br />
            <div className="butttonReviewInfo">
              <button type="button" className="backButton" onClick={()=>setStep(currentStep-1)}>
                <span className="backIcon">
                  <BiArrowBack color="green" />
                </span>
                Back
              </button>
              <button type="submit" onClick={()=>setStep(currentStep+1)} disabled={data.tokenName==''||data.balanceInput==''||data.walletAddress==''||data.tokenBalance==''} className="ButtonBase">
                Next: Configure template
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default TokenSetting;
