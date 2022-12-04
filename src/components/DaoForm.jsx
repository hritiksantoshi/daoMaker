import React, { useEffect, useState } from "react";
import ClaimName from "./Name/ClaimName";
import Sidebar from "./sidebar/Sidebar";
import Voting from "./voting/Voting";
import TokenSetting from "./configtemp/TokenSetting";
import { Row } from "react-bootstrap";
import { createContext } from "react";
import "./DaoForm.css";
import { createUnarySpacing } from "@mui/system";
import ReviewInfo from "./ReviewInfo/ReviewInfo";
export const StepContext = createContext();
const DaoForm = () => {
  const [currentStep, setStep] = useState(0);
  const [data,setData] = useState({
    name:'',
    votingPercentage:50,
    votingPeriod:{
      day:1,
      hours:0,
      mins:0
    },
    tokenName:"",
    balanceInput:"",
    walletAddress:"",
    tokenSymbol:""

  });
  const [progress,setProgress] = useState(0);

  useEffect(() => {
    console.log(data,'data');
    setProgress(currentStep*33);
  }, [currentStep]);
  
  return (
    <StepContext.Provider value={{ currentStep, setStep,data,setData,progress,setProgress }}>
      <Row className="section">
        <Sidebar />
        {currentStep === 1 ? <Voting /> : currentStep === 2 ? <TokenSetting/> : currentStep === 3 ?<ReviewInfo/>:<ClaimName />}
      </Row>
    </StepContext.Provider>
  );
};
export default DaoForm;
