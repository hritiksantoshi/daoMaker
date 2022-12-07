import { useState } from "react";
import "./App.css";
import DaoForm from "./components/DaoForm";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Home from "./components/home/Home"
import DaoNav from "./components/DaoNavBar/DaoNav";
import DaoSideBar from "./components/DaoSideBar/DaoSideBar";
import { Col, Container, Row } from "react-bootstrap";
import Token from "./components/Tokens/Token";
function Layout() {
  return (
    <Container fluid style={{padding:0}}>
      <DaoNav />
      <Row className="myRow">
        <DaoSideBar/>
        <Outlet />
      </Row>
    </Container>
  );
}

function Two() {
  return <Col lg="10" className="bg-dark">

  </Col>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/dapp" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="2" element={<Token/>} />
        </Route>
        <Route path="/token" element={<DaoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
