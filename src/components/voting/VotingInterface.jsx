import React, { useContext, useState, useEffect } from "react";
import "./VotingInterFace.css";
import {
  OverlayTrigger,
  Popover,
  Col,
  Container,
  ProgressBar,
} from "react-bootstrap";
import Timer from "../timer/Timer";
import { useNavigate } from "react-router-dom";
import { transferProposal } from "../../utils/transfer";
import { StepContext } from "../../App";
import { getProposalState } from "../../utils/getData";
import { execute } from "../../utils/transfer";
function VotingInterFace() {
  const { voted, setVoted, payee } = useContext(StepContext);
  // const [proposalState, setProposalState] = useState();
  const vote = async () => {
    const res = await transferProposal(setVoted, payee.address, payee.amount);
  };
  // const data = async () => {
  //   const state = await getProposalState();
  //   setProposalState(state);
  // };

  // useEffect(() => {
  //   console.log(proposalState, "hg");
  //   if (proposalState == 4 && voted) {
  //     console.log("hhyy");
  //     execute(payee.address, payee.amount);
  //   }
  // }, [proposalState]);

  useEffect(() => {
    async function fetchState() {
      const state = await getProposalState();
      console.log(state, "hg");
      if (state == 4) {
        console.log("hhyy");
        clearInterval(timer);
        await execute(payee.address, payee.amount);
      }
    }
    var timer = setInterval(() => {
      fetchState();
    }, 2000);
  }, []);

  // useEffect(() => {
  //   data();
  // });

  const navigate = useNavigate();
  return (
    <Col lg="10">
      <Container>
        <div className="gZFkef">
          <div className="iTueea">
            <div className="eTEUIa">
              <div className="cyZZaq">
                <div className="iqmlTN">
                  <h1 className="ejqTJG">Voting</h1>
                </div>
                <div className="eIkgfQ"></div>
              </div>
            </div>
            <div className="soHkW">
              <button type="button" className="deWnNw">
                <span className="kkzygP">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.2"
                      d="M18.434 11.434H5.566a.566.566 0 000 1.132h12.869a.565.565 0 100-1.132z"
                    ></path>
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.2"
                      d="M6.366 12l4.426-4.426a.565.565 0 10-.8-.8L5.166 11.6a.566.566 0 000 .8l4.826 4.826a.564.564 0 00.8 0 .565.565 0 000-.8L6.366 12z"
                    ></path>
                  </svg>
                </span>
                <span className="ebLErP">Back</span>
              </button>
            </div>
            <div className="fhmfyf">
              <div className="glBHDn">
                <div className="cZRmoC">
                  <div className="dzDOWM">
                    <div>
                      <div className="cIOcNY">
                        <button
                          type="button"
                          title="0x6672f8273ca6b7cb98cf1eede5eb0f6507c82fc3"
                          className="gUstKE"
                        >
                          <div className="BadgeBase___StyledDiv-sc-4zaahn-1 hgFmdW">
                            <span className="AppBadge___StyledSpan2-sc-5gkmrm-3 fVBxZm"></span>
                            <span className="BadgeBase___StyledSpan-sc-4zaahn-2 kKBEru">
                              Finance
                            </span>
                          </div>
                        </button>
                      </div>
                      <section className="VoteDetail___StyledSection-sc-1lgtq66-1 eiPCVW">
                        <h1 className="VoteDetail___StyledH-sc-1lgtq66-2 iQXyzQ">
                          <span className="VoteDetail___StyledSpan-sc-1lgtq66-3 lbjwkX">
                            Vote #7
                          </span>
                        </h1>
                        <div></div>
                        <div className="VoteDetail___StyledDiv2-sc-1lgtq66-4 hKELTT">
                          <div>
                            <h2 className="VoteDetail___StyledH2-sc-1lgtq66-5 bsoVue">
                              Description
                            </h2>
                            <div className="VoteDescription___StyledDiv-sc-tp9dw4-0 dQDDqf">
                              <span className="Linkify">
                                <span>
                                  <div className="DetailedDescription___StyledDiv-sc-11ry8i1-0 gDqlEc">
                                    <span>
                                      Tokens (SAT)<span>:</span>
                                      <span>No description</span>
                                      <br />
                                    </span>
                                  </div>
                                </span>
                              </span>
                            </div>
                          </div>
                          <div>
                            <h2 className="VoteDetail___StyledH3-sc-1lgtq66-6 eglRwE">
                              Created By
                            </h2>
                            <div className="VoteDetail___StyledDiv3-sc-1lgtq66-7 iauApr">
                              <button
                                type="button"
                                title="0x6672f8273CA6B7cB98cF1eeDE5Eb0F6507c82Fc3"
                                className="BadgeBase___StyledButtonBase-sc-4zaahn-0 fozCQu ButtonBase___StyledButton-ur1q76-0 gUstKE"
                              >
                                <div className="BadgeBase___StyledDiv-sc-4zaahn-1 hgFmdW">
                                  <div className="IdentityBadge___StyledDiv-q71pax-0 jBEmTu">
                                    <div
                                      size="24"
                                      radius="0"
                                      className="EthIdenticon__Main-sc-1h8gagr-0 kokuxE"
                                    >
                                      <div
                                        size="30"
                                        className="EthIdenticon__BlockiesScaling-sc-1h8gagr-2 juDKWT"
                                      >
                                        <div className="EthIdenticon__BlockiesOpacity-sc-1h8gagr-1 jQkUql">
                                          <canvas
                                            className="identicon"
                                            width="30"
                                            height="30"
                                            style={{
                                              width: "30px",
                                              height: "30px",
                                            }}
                                          ></canvas>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="BadgeBase___StyledSpan-sc-4zaahn-2 dNyVSj">
                                    0x6672…2Fc3
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h2 className="VoteDetail___StyledH4-sc-1lgtq66-8 jCKKxV">
                            Current votes
                          </h2>
                          <div className="VoteDetail___StyledSummaryBar-sc-1lgtq66-9 dPyQZ SummaryBar__Main-sc-9vcktj-0 hwHxkw">
                            <ProgressBar
                              variant="SOME_NAME"
                              now={voted ? 100 : 0}
                              style={{ width: "100%", height: 7 }}
                            />
                            <div className="SummaryBar__RequiredSeparatorClip-sc-9vcktj-2 cuJjtJ">
                              <div
                                className="SummaryBar__RequiredSeparatorWrapper-sc-9vcktj-3 bRFfRo"
                                style={{
                                  transform:
                                    "translate3d(56%, 0px, 0px) scale3d(1, 1, 1)",
                                }}
                              >
                                <div className="SummaryBar___StyledDiv-sc-9vcktj-4 cMQAmw"></div>
                              </div>
                            </div>
                          </div>
                          <div className="SummaryRows___StyledDiv-sc-1gdki6w-1 jqHVuf">
                            <div className="SummaryRows___StyledDiv2-sc-1gdki6w-2 fkvmqH">
                              <div className="SummaryRows___StyledDiv3-sc-1gdki6w-3 cLMYAZ">
                                <div
                                  color="#2CC68F"
                                  className="SummaryRows__Bullet-sc-1gdki6w-0 jFeQey"
                                ></div>
                                <div className="SummaryRows___StyledDiv4-sc-1gdki6w-4 bdDmsR">
                                  Yes
                                </div>
                                <div>{voted ? 100 : 0}%</div>
                              </div>
                              <div className="SummaryRows___StyledDiv5-sc-1gdki6w-5 fPINVT">
                                0 SAT
                              </div>
                            </div>
                            <div className="SummaryRows___StyledDiv2-sc-1gdki6w-2 fkvmqH">
                              <div className="SummaryRows___StyledDiv3-sc-1gdki6w-3 cLMYAZ">
                                <div
                                  color="#FF6969"
                                  className="SummaryRows__Bullet-sc-1gdki6w-0 gNdSOq"
                                ></div>
                                <div className="SummaryRows___StyledDiv4-sc-1gdki6w-4 bdDmsR">
                                  No
                                </div>
                                <div>0%</div>
                              </div>
                              <div className="SummaryRows___StyledDiv5-sc-1gdki6w-5 fPINVT">
                                0 SAT
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="VoteActions__ButtonsContainer-sc-vp6owq-0 kBsrRF">
                            <button
                              onClick={vote}
                              type="button"
                              className="VoteActions__VotingButton-sc-vp6owq-1 jwUKol Button___StyledButtonBase-sc-8npd5h-0 lbXcXR ButtonBase___StyledButton-ur1q76-0 gUstKE"
                            >
                              <svg
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="VoteActions___StyledIconCheck-sc-vp6owq-7 fleRGR"
                              >
                                <path
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="0.5"
                                  d="M18.834 7.166a.565.565 0 00-.8 0l-8.447 8.466-3.622-3.63a.565.565 0 00-.8 0 .568.568 0 000 .802l4.022 4.03a.563.563 0 00.8 0l8.847-8.866a.568.568 0 000-.802z"
                                ></path>
                              </svg>
                              Yes
                            </button>
                            <button
                              type="button"
                              className="VoteActions__VotingButton-sc-vp6owq-1 jwUKol Button___StyledButtonBase-sc-8npd5h-0 ecktMv ButtonBase___StyledButton-ur1q76-0 gUstKE"
                            >
                              <svg
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="VoteActions___StyledIconCross-sc-vp6owq-8 bvWrPg"
                              >
                                <path
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="0.5"
                                  d="M17.858 6.142a.485.485 0 00-.685 0L6.142 17.172a.485.485 0 10.686.686l11.03-11.03a.485.485 0 000-.686z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="0.5"
                                  d="M17.858 17.173l-5.515-5.516-5.516-5.515a.485.485 0 10-.685.685l11.03 11.031a.483.483 0 00.686 0 .485.485 0 000-.685z"
                                ></path>
                              </svg>
                              No
                            </button>
                          </div>
                          <section className="Info___StyledSection-sc-1kgnlbm-0 illHrk">
                            Voting with <strong>16 SAT</strong> . This was your
                            balance when the vote started (block{" "}
                            <a
                              href="https://goerli.etherscan.io/block/8137976"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="Link___StyledButtonBase-sc-57j27s-0 BBpIm ButtonBase___StyledButton-ur1q76-0 bKvhqn"
                            >
                              8137976
                            </a>
                            , mined at{" "}
                            <strong>11:54 on 15th of Dec. 2022</strong>).
                          </section>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Split___StyledDiv2-sc-19nz0vo-1 bdPclg">
                <section className="Box___StyledDiv-sc-54p6u6-0 cZRmoC">
                  <h1 className="Box___StyledH-sc-54p6u6-1 bknuWX">Status</h1>
                  <div className="Box___StyledDiv2-sc-54p6u6-2 cHFJHH">
                    <div>
                      <div className="VoteDetail___StyledDiv6-sc-1lgtq66-16 iIvtuE">
                        Time remaining
                      </div>
                      <time
                        datetime="2022-12-15T07:24:00.000Z"
                        className="Timer___StyledTime-sc-58hkwl-0 jzzllp"
                      >
                        <span className="Timer___StyledSpan-sc-58hkwl-1 bEuPeh">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            _css4="#8FA4B5"
                            className="Timer___StyledIconTime-sc-58hkwl-2 kiLxyp"
                          >
                            <path
                              fill="currentColor"
                              d="M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M14.663 13.75l-2.017-2.018V7.588a.646.646 0 10-1.292 0V12c0 .171.068.336.189.457l2.206 2.206a.644.644 0 00.914 0 .646.646 0 000-.914z"
                            ></path>
                          </svg>
                        </span>
                        <span>
                         
                      <Timer/>


                        </span>
                      </time>
                    </div>
                  </div>
                </section>
                <section className="Box___StyledDiv-sc-54p6u6-0 cZRmoC">
                  <h1 className="Box___StyledH-sc-54p6u6-1 bknuWX">
                    Support %
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={supportPopover}
                    >
                      <button
                        type="button"
                        title="What is Support?"
                        className="Help___StyledDiscButton-sc-11d74sh-0 imchwg DiscButton___StyledButtonBase-sc-1ay99f2-0 cSLGyv ButtonBase___StyledButton-ur1q76-0 fcuUBr"
                      >
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M11.5 4C9.025 4 7 5.966 7 8.369c-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-1.458 1.198-2.621 2.7-2.621 1.502 0 2.7 1.163 2.7 2.62.01 1.197-.624 1.81-1.51 2.622-.442.406-.933.83-1.35 1.384-.415.554-.74 1.275-.74 2.111-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-.431.13-.731.394-1.083.263-.351.673-.724 1.134-1.146.92-.845 2.08-1.753 2.072-3.887C16 5.983 13.97 4 11.5 4zm0 12.67c-.663 0-1.2.521-1.2 1.165 0 .643.537 1.165 1.2 1.165.663 0 1.2-.522 1.2-1.165s-.537-1.165-1.2-1.165z"
                          ></path>
                        </svg>
                      </button>
                    </OverlayTrigger>
                  </h1>
                  <div className="Box___StyledDiv2-sc-54p6u6-2 cHFJHH">
                    <div>
                      <div className="VoteDetail___StyledDiv4-sc-1lgtq66-10 bAFsYe">
                        0%{" "}
                        <span className="VoteDetail___StyledSpan2-sc-1lgtq66-11 pvLqM">
                          (&gt;50% needed)
                        </span>
                      </div>
                      <div className="VoteDetail___StyledSummaryBar2-sc-1lgtq66-12 ZPFig SummaryBar__Main-sc-9vcktj-0 hwHxkw">
                        <div className="SummaryBar___StyledDiv2-sc-9vcktj-5 kEELia"></div>
                        <div className="SummaryBar__RequiredSeparatorClip-sc-9vcktj-2 cuJjtJ">
                          <div
                            className="SummaryBar__RequiredSeparatorWrapper-sc-9vcktj-3 bRFfRo"
                            style={{
                              transform:
                                "translate3d(56%, 0px, 0px) scale3d(1, 1, 1)",
                            }}
                          >
                            <div className="SummaryBar___StyledDiv-sc-9vcktj-4 cMQAmw"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <section className="Box___StyledDiv-sc-54p6u6-0 cZRmoC">
                  <h1 className="Box___StyledH-sc-54p6u6-1 bknuWX">
                    Minimum Approval %
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={approvalPopover}
                    >
                      <button
                        type="button"
                        title="What is Support?"
                        className="Help___StyledDiscButton-sc-11d74sh-0 imchwg DiscButton___StyledButtonBase-sc-1ay99f2-0 cSLGyv ButtonBase___StyledButton-ur1q76-0 fcuUBr"
                      >
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M11.5 4C9.025 4 7 5.966 7 8.369c-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-1.458 1.198-2.621 2.7-2.621 1.502 0 2.7 1.163 2.7 2.62.01 1.197-.624 1.81-1.51 2.622-.442.406-.933.83-1.35 1.384-.415.554-.74 1.275-.74 2.111-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-.431.13-.731.394-1.083.263-.351.673-.724 1.134-1.146.92-.845 2.08-1.753 2.072-3.887C16 5.983 13.97 4 11.5 4zm0 12.67c-.663 0-1.2.521-1.2 1.165 0 .643.537 1.165 1.2 1.165.663 0 1.2-.522 1.2-1.165s-.537-1.165-1.2-1.165z"
                          ></path>
                        </svg>
                      </button>
                    </OverlayTrigger>{" "}
                  </h1>
                  <div className="Box___StyledDiv2-sc-54p6u6-2 cHFJHH">
                    <div>
                      <div className="VoteDetail___StyledDiv5-sc-1lgtq66-13 fwQpKG">
                        0%{" "}
                        <span className="VoteDetail___StyledSpan3-sc-1lgtq66-14 fucZiR">
                          (&gt;55% needed)
                        </span>
                      </div>
                      <div className="VoteDetail___StyledSummaryBar3-sc-1lgtq66-15 ejgiNL SummaryBar__Main-sc-9vcktj-0 hwHxkw">
                        <div className="SummaryBar___StyledDiv2-sc-9vcktj-5 kEELia"></div>
                        <div className="SummaryBar__RequiredSeparatorClip-sc-9vcktj-2 cuJjtJ">
                          <div
                            className="SummaryBar__RequiredSeparatorWrapper-sc-9vcktj-3 bRFfRo"
                            style={{
                              transform:
                                "translate3d(55%, 0px, 0px) scale3d(1, 1, 1)",
                            }}
                          >
                            <div className="SummaryBar___StyledDiv-sc-9vcktj-4 cMQAmw"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Col>
  );
}

const supportPopover = (
  <Popover
    style={{ padding: "12px" }}
    id="popover-positioned-right"
    title="Popover right"
  >
    Support is the relative percentage of tokens that are required to vote “Yes”
    for a proposal to be approved. For example, if “Support” is set to 50%, then
    more than 50% of the tokens used to vote on a proposal must vote “Yes” for
    it to pass.
  </Popover>
);
const approvalPopover = (
  <Popover
    style={{ padding: "12px" }}
    id="popover-positioned-right"
    title="Popover right"
  >
    Minimum Approval is the percentage of the total token supply that is
    required to vote “Yes” on a proposal before it can be approved. For example,
    if the “Minimum Approval” is set to 20%, then more than 20% of the
    outstanding token supply must vote “Yes” on a proposal for it to pass.
  </Popover>
);

export default VotingInterFace;
