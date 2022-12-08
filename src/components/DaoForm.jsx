import React, { useEffect, useState } from "react";
import ClaimName from "./Name/ClaimName";
import Sidebar from "./sidebar/Sidebar";
import Voting from "./voting/Voting";
import TokenSetting from "./configtemp/TokenSetting";
import { Row,Container } from "react-bootstrap";
import { createContext } from "react";
import "./DaoForm.css";
import { createUnarySpacing } from "@mui/system";
import ReviewInfo from "./ReviewInfo/ReviewInfo";
import Loader from "../components/loaderModal/Loader";
import { useContext } from "react";
import { StepContext } from "../App.js";
import { WelcomeNav } from "./WelcomeNav/WelcomeNav";
const DaoForm = () => {
  const { currentStep } = useContext(StepContext);

  return (
    <>
    <Container fluid style={{ padding: 0 }}>
      <Loader />
      <WelcomeNav/>
      <Row className="section">
        <Sidebar />
        {currentStep === 1 ? (
          <Voting />
        ) : currentStep === 2 ? (
          <TokenSetting />
        ) : currentStep === 3 ? (
          <ReviewInfo />
        ) : currentStep === 4 ? (
          <ReviewInfo />
        ) : (
          <ClaimName />
        )}
      </Row>
      </Container>
    </>
  );
};
export default DaoForm;
