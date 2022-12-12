import React, { useContext, useState } from "react";
import "./TokenSetting.css";
import TokenImage from "../../assets/tokenImage.jpg";
import { AiFillQuestionCircle, AiOutlineDelete } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";

import { Row } from "react-bootstrap";
import { StepContext } from "../../App";

function TokenSetting() {
  const { data, setData, currentStep, setStep } = useContext(StepContext);
  const [tokenList, setTokenlist] = useState([{ token: "" }]);
  const handleTokenAdd = () => {
    setTokenlist([...tokenList, { token: "" }]);
  };
  const handleTokenRemove = (index) => {
    const list = [...tokenList];
    list.splice(index, 1);
    setTokenlist(list);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(typeof e.target.token.value);
    let tokens = [];
    let amount = [];

    if (!e.target.token.length) {
      tokens.push(e.target.token.value);
      amount.push(e.target.balanceInput.value);
      console.log(e.target.token.value);
    } else {
      for (let i = 0; i < e.target.token.length; i++) {
        tokens.push(e.target.token[i].value);
        console.log(e.target.token[i].value, "kl");
        amount.push(e.target.balanceInput[i].value);
      }
    }

    setData({ ...data, walletAddress: tokens ,balanceInput:amount});
     setStep(currentStep + 1);
  
  };
  return (
    <div className="configToken col-lg-10">
      <div className="insideContainer">
        <form onSubmit={submit} method="POST">
          <header className="tokenheader">
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
                          name="tokenName"
                          type="text"
                          placeholder="My Organization Token"
                          className="inputAddress"
                          onChange={(e) =>
                            setData({ ...data, tokenName: e.target.value })
                          }
                        />
                      </div>
                      <div className="balancesDiv" style={{}}>
                        <div className=""></div>
                      </div>
                    </div>
                    <div>
                      <input
                        name="tokenSymbol"
                        type="text"
                        className="balanceInput"
                        value={data.tokenBalance}
                        onChange={(e) =>
                          setData({ ...data, tokenSymbol: e.target.value })
                        }
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
                  {tokenList.map((singleToken, index) => {
                    return (
                      <div key={index} className="accountAddress">
                        <div className="tokenAddress">
                          <input
                            name="token"
                            id="token"
                            type="text"
                            placeholder="Account address"
                            className="inputAddress"

                            // onChange={(e) =>
                            //   setData({ ...data, walletAddress: [e.target.value] })
                            // }
                          />
                          <div className="deleteButtonDiv">
                            <span className="spanButton">
                              {tokenList.length > 1 && (
                                <button
                                  type="button"
                                  title="Remove"
                                  className="deleteButton"
                                  onClick={() => handleTokenRemove(index)}
                                >
                                  <span className="spanDeleteButton">
                                    <AiOutlineDelete color="red" />
                                  </span>
                                </button>
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="balancesDiv" style={{}}>
                          <div className=""></div>
                        </div>

                        <div>
                          <input
                            name="balanceInput"
                            type="text"
                            className="balanceInput"
                            // onChange={(e) =>
                            //   setData({ ...data, balanceInput: e.target.value })
                            // }
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="addMoreAddress"
                  onClick={handleTokenAdd}
                >
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
              <button
                type="button"
                className="backButton"
                onClick={() => setStep(currentStep - 1)}
              >
                <span className="backIcon">
                  <BiArrowBack color="rgb(8, 190, 229)" />
                </span>
                Back
              </button>
              <button
                type="submit"
                // onClick={() => setStep(currentStep + 1)}
                className="ButtonBase"
              >
                Next: Configure template
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TokenSetting;
