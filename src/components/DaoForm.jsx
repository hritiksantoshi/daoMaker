import React, { useContext } from "react";
import ClaimName from "./Name/ClaimName";
import Sidebar from "./sidebar/Sidebar";
import Voting from "./voting/Voting";
import TokenSetting from "./configtemp/TokenSetting";
import { Row, Container } from "react-bootstrap";
import { createContext } from "react";
import "./DaoForm.css";
import { createUnarySpacing } from "@mui/system";
import ReviewInfo from "./ReviewInfo/ReviewInfo";
import Loader from "../components/loaderModal/Loader";
import { StepContext } from "../App.js";
import { WelcomeNav } from "./WelcomeNav/WelcomeNav";
import ConnectionModal from "./connectionModal/ConnectionModal";
import DisconnectModal from "./DisconnectModal/DisconnectModal";
const DaoForm = () => {
  const {
    currentStep,
    show,
    setShow,
    showDiss,
    setShowDiss,
    walletAddress,
    setWalletAddress,
    displayWalletAddress,
    setDisplayWalletAddress,
  } = useContext(StepContext);

  return (
    <>
      <Container fluid style={{ padding: 0 }}>
        <Loader />
        <ConnectionModal />
        <DisconnectModal />
        <WelcomeNav />
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
