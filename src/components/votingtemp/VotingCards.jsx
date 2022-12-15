import React from "react";
import "./VotingCards.css";
import { Link ,useNavigate} from "react-router-dom";
import Countdown from "react-countdown";
import tokenImage from "../../assets/tokenImage.jpg";
import { style } from "@mui/system";
function VotingCards() {
  const navigate = useNavigate();
  return (
  
      <div
        role="button"
        tabindex="0"
        onClick={()=>{navigate("/dapp/vote")}}
        className="VoteCard___StyledCard-sc-1y56m76-0 fQlUVd Card___StyledDiv-sc-13r75gj-0 gQXESQ ButtonBase___StyledButton-ur1q76-0 loSVNR"
      >
        <div className="VoteCard___StyledDiv-sc-1y56m76-1 hHdapx">
          <a
            role="button"
            tabindex="-1"
            title="0x721492d4636e45a6b276e91e4a2898d718f6caf5"
            className="BadgeBase___StyledButtonBase-sc-4zaahn-0 fozCQu ButtonBase___StyledButton-ur1q76-0 diDySi"
          >
            <div className="BadgeBase___StyledDiv-sc-4zaahn-1 hgFmdW">
              <div
                className="AppBadge___StyledSpan2-sc-5gkmrm-3 giiQeA"
                style={{ backgroundImage: `url(${tokenImage})` }}
              ></div>
              <span className="BadgeBase___StyledSpan-sc-4zaahn-2 kKBEru">
                Tokens
              </span>
            </div>
          </a>
        </div>
        <div
          title="#6: Finance: No description"
          className="VoteCard___StyledVoteDescription-sc-1y56m76-3 VNbKx VoteDescription___StyledDiv-sc-tp9dw4-0 dQDDqf"
        >
          <span className="VoteCard___StyledSpan-sc-1y56m76-2 dXDcCV">
            #1:{" "}
          </span>
          <span>Token: No description</span>
        </div>
        <div className="VoteOption__Main-sc-mto016-0 lcnduA">
          <div className="VoteOption__Labels-sc-mto016-1 eykeSg">
            <span className="VoteOption___StyledSpan-sc-mto016-4 hOTxEy">
              <span
                className="VoteCard___StyledSpan2-sc-1y56m76-5 kwqzoP"
                style={{ paddingRight: "100px" }}
              >
                <span>Yes</span>
              </span>
            </span>
            <span className="VoteOption___StyledSpan2-sc-mto016-5 eAGLqW">
              0%
            </span>
          </div>
          <div className="VoteOption___StyledDiv-sc-mto016-6 dBAdwG">
            <div
              className="VoteOption__Bar-sc-mto016-2 VoteOption___StyledBar-sc-mto016-3 dBTMlf"
              style={{ transform: "scale3d(0.0, 1, 1)" }}
            ></div>
          </div>
        </div>
        <div className="VoteOption__Main-sc-mto016-0 lcnduA">
          <div className="VoteOption__Labels-sc-mto016-1 eykeSg">
            <span className="VoteOption___StyledSpan-sc-mto016-4 hOTxEy">
              <span
                className="VoteCard___StyledSpan2-sc-1y56m76-5 kwqzoP"
                style={{ paddingRight: "100px" }}
              >
                <span>No</span>
              </span>
            </span>
            <span className="VoteOption___StyledSpan2-sc-mto016-5 eAGLqW">
              0%
            </span>
          </div>
          <div className="VoteOption___StyledDiv-sc-mto016-6 dBAdwG">
            <div
              className="VoteOption__Bar-sc-mto016-2 VoteOption___StyledBar-sc-mto016-3 dUqBnz"
              style={{ transform: "scale3d(0, 1, 1)" }}
            ></div>
          </div>
        </div>
        <div className="VoteCard___StyledDiv2-sc-1y56m76-4 fkJWFj">
          <span class="bEuPeh">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              _css4="#8FA4B5"
              class="Timer___StyledIconTime-sc-58hkwl-2 kiLxyp"
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
          <Countdown date={Date.now() + 86400000}  />
        </div>
      </div>

  );
}

export default VotingCards;
