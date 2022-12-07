import React from 'react';
import './VotingCards.css';
import FinanceImage from '../../assets/finance.svg'
function VotingCards() {
    return (
        <div>
            <div role="button" tabindex="0" className="VoteCard___StyledCard-sc-1y56m76-0 fQlUVd Card___StyledDiv-sc-13r75gj-0 gQXESQ ButtonBase___StyledButton-ur1q76-0 loSVNR">
                <div className="VoteCard___StyledDiv-sc-1y56m76-1 hHdapx">
                    <a role="button" tabindex="-1" title="0x721492d4636e45a6b276e91e4a2898d718f6caf5" className="BadgeBase___StyledButtonBase-sc-4zaahn-0 fozCQu ButtonBase___StyledButton-ur1q76-0 diDySi">
                        <div className="BadgeBase___StyledDiv-sc-4zaahn-1 hgFmdW">
                            <div className="AppBadge___StyledSpan2-sc-5gkmrm-3 giiQeA" style={{ backgroundImage: `url(${FinanceImage})` }}></div>
                            <span className="BadgeBase___StyledSpan-sc-4zaahn-2 kKBEru">Finance</span></div></a></div>
                <div title="#6: Finance: No description" className="VoteCard___StyledVoteDescription-sc-1y56m76-3 VNbKx VoteDescription___StyledDiv-sc-tp9dw4-0 dQDDqf">
                    <span className="VoteCard___StyledSpan-sc-1y56m76-2 dXDcCV">#6: </span><span>Finance: No description</span></div>
                <div className="VoteOption__Main-sc-mto016-0 lcnduA">
                    <div className="VoteOption__Labels-sc-mto016-1 eykeSg" ><span className="VoteOption___StyledSpan-sc-mto016-4 hOTxEy">
                        <span className="VoteCard___StyledSpan2-sc-1y56m76-5 kwqzoP" style={{ paddingRight: '100px' }}><span>Yes</span></span></span>
                        <span className="VoteOption___StyledSpan2-sc-mto016-5 eAGLqW">68%</span></div>
                    <div className="VoteOption___StyledDiv-sc-mto016-6 dBAdwG">
                        <div className="VoteOption__Bar-sc-mto016-2 VoteOption___StyledBar-sc-mto016-3 dBTMlf" style={{ transform: "scale3d(0.68, 1, 1)" }}></div></div></div>
                <div className="VoteOption__Main-sc-mto016-0 lcnduA">
                    <div className="VoteOption__Labels-sc-mto016-1 eykeSg" >
                        <span className="VoteOption___StyledSpan-sc-mto016-4 hOTxEy">
                            <span className="VoteCard___StyledSpan2-sc-1y56m76-5 kwqzoP" style={{ paddingRight: '100px' }}><span>No</span></span></span>
                        <span className="VoteOption___StyledSpan2-sc-mto016-5 eAGLqW">0%</span></div>
                    <div className="VoteOption___StyledDiv-sc-mto016-6 dBAdwG">
                        <div className="VoteOption__Bar-sc-mto016-2 VoteOption___StyledBar-sc-mto016-3 dUqBnz" style={{ transform: "scale3d(0, 1, 1)" }}></div></div></div>
                <div className="VoteCard___StyledDiv2-sc-1y56m76-4 fkJWFj"><span className="VoteStatus__Main-sc-qb3gbs-0 VoteStatus___StyledMain-sc-qb3gbs-1 cxzfHh">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" stroke="currentColor" stroke-width="0.5" d="M18.834 7.166a.565.565 0 00-.8 0l-8.447 8.466-3.622-3.63a.565.565 0 00-.8 0 .568.568 0 000 .802l4.022 4.03a.563.563 0 00.8 0l8.847-8.866a.568.568 0 000-.802z"></path></svg>
                    <span className="VoteStatus__StatusLabel-sc-qb3gbs-2 kxMtfP">Passed (enacted)</span></span></div></div>

        </div>
    )
}

export default VotingCards