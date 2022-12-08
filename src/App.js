import { useState } from "react";
import "./App.css";
import DaoForm from "./components/DaoForm";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Home from "./components/home/Home";
import DaoNav from "./components/DaoNavBar/DaoNav";
import DaoSideBar from "./components/DaoSideBar/DaoSideBar";
import { Col, Container, Row } from "react-bootstrap";
import Token from "./components/Tokens/Token";
import VotingDetails from "./components/votingtemp/VotingDetails";
import { createContext } from "react";
function Layout() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <DaoNav />
      <Row className="myRow">
        <DaoSideBar />
        <Outlet />
      </Row>
    </Container>
  );
}

function Two() {
  return <Col lg="10" className="bg-dark"></Col>;
}
export const StepContext = createContext();

function App() {
  const [currentStep, setStep] = useState(0);
  const [walletAddress, setWalletAddress] = useState("");
  const [displayWalletAddress, setDisplayWalletAddress] = useState("");
  const [data, setData] = useState({
    name: "",
    votingPercentage: 50,
    votingPeriod: {
      day: 1,
      hours: 0,
      mins: 0,
    },
    tokenName: "",
    balanceInput: "",
    walletAddress: "",
    tokenSymbol: "",
  });
  const [progress, setProgress] = useState(0);
  const [loading, setloading] = useState(false);
  const loader = () => {
    console.log("lo");
    setloading(!loading);
  };
  return (
    <StepContext.Provider
      value={{
        currentStep,
        setStep,
        data,
        setData,
        progress,
        setProgress,
        loading,
        setloading,
        loader,
        walletAddress,
        setWalletAddress,
        displayWalletAddress,
        setDisplayWalletAddress,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path="/dapp" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="2" element={<Token />} />
            <Route path="3" element={<VotingDetails />} />
          </Route>
          <Route path="/token" element={<DaoForm />} />
        </Routes>
      </BrowserRouter>
    </StepContext.Provider>
  );
}

export default App;
