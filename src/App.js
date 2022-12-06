import { useState } from "react";
import "./App.css";
import DaoForm from "./components/DaoForm";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import DaoNav from "./components/DaoNavBar/DaoNav";
import DaoSideBar from "./components/DaoSideBar/DaoSideBar";
import { Col, Container, Row } from "react-bootstrap";
function Layout() {
  return (
    <Container fluid>
      <DaoNav />
      <Row className="myRow">
        <DaoSideBar/>
        <Outlet />
      </Row>
    </Container>
  );
}

function Two() {
  return <Col lg="10" className="bg-primary">

  </Col>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/dapp" element={<Layout />}>
          <Route index element={<Col lg="10" className="bg-dark"></Col>} />
          <Route path="2" element={<Two/>} />
        </Route>
        <Route path="/token" element={<DaoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
