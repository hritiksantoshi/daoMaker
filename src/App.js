import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import ClaimName from "./components/Name/ClaimName";
import './App.css';
import { Row } from "react-bootstrap";
import Voting from "./components/voting/Voting";
import DaoForm from "./components/DaoForm";

function App() {


  return (
    // <Row className="section">
    //   <Sidebar />
    //   {/* <ClaimName /> */}
    //   <Voting/>
    // </Row>
    <DaoForm/>
  );
}

export default App;
