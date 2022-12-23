import { useState,useEffect } from "react";
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
import FinanceComp from "./components/Finance/FinanceComp";
import ConnectionModal from "./components/connectionModal/ConnectionModal";
import DisconnectModal from "./components/DisconnectModal/DisconnectModal";
import Token1 from "./components/Tokens/Token1";
import TokenModal from "./components/addTokenModal/TokenModal";
import VotingInterFace from "./components/voting/VotingInterface";
import TransferModal from "./components/tranferModal/TransferModal";
function Layout() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <ConnectionModal/>
      <DisconnectModal/>
      <TokenModal/>
      <TransferModal/>
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
  const [show,setShow] = useState(false);
  const [showDiss,setShowDiss] = useState(false);
  const [showTokenModal,setShowTokenModal] = useState(false);
  const [showTransferModal,setShowTransferModal] = useState(false);
  const [proposal,setProposal] = useState([]);
  const [voted,setVoted] = useState(false);
  const [payee,setPayee] = useState({
      address:"",
      amount:""
  })
  const [data, setData] = useState({
    name: "",
    votingPercentage: 50,
    votingPeriod: {
      day: 1,
      hours: 0,
      mins: 0,
    },
    tokenName: "",
    balanceInput: [],
    walletAddress: [],
    tokenSymbol: "",
  });
  const [progress, setProgress] = useState(0);
  const [loading, setloading] = useState(false);
  const loader = () => {
    console.log("lo");
    setloading(!loading);
  };
  const handleClose = () =>{setShowTokenModal(false);
    setShowTransferModal(false)
  };
  const handleShow = () => setShowTokenModal(true);
  const handleShow1 = () => {console.log("123"); setShowTransferModal(true)};

  

  useEffect(() =>{
    console.log(data);
  })
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
        show,
        setShow,
        showDiss,
        setShowDiss,
        showTokenModal,
        setShowTokenModal,
        handleClose,
        handleShow,
        proposal,
        setProposal,
        showTransferModal,
        setShowTransferModal,
        handleShow1,
        voted,
        setVoted,
        payee,
        setPayee

      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path="/dapp" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="2" element={<Token1 />} />
            <Route path="3" element={<VotingDetails />} />
            <Route path="4" element={<FinanceComp />} />
            <Route path="vote" element={<VotingInterFace/>}/>
          </Route>
          <Route path="/token" element={<DaoForm />} />
        </Routes>
      </BrowserRouter>
    </StepContext.Provider>
  );
}

export default App;
