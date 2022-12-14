import React, { useEffect, useState,useContext } from "react";
import { holders,tokenTotalSupply,tokenNameAndSymbol } from "../../utils/getData";
import { Col, Container, Table } from "react-bootstrap";
import { StepContext } from "../../App";
import "./Token1.css";
const Token1 = () => {
  const { showTokenModal,setShowTokenModal,handleClose,handleShow} = useContext(StepContext);
  const [tkn, setTkn] = useState([]);
  const [totalSupply,setTotalsupply] = useState("");
  const [tknSymbol,setTknSymbol] = useState("")
  const data = async () => {
    try {
      const hold = await holders();
      setTkn(hold);
      const supply = await tokenTotalSupply();
       setTotalsupply(supply);
       const symBol = await tokenNameAndSymbol();
       setTknSymbol(symBol);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
    console.log(tkn);
  }, []);
  return (
    <Col lg="10">
      <Container>
        <div className="hdrDiv">
          <div className="tknheader">
            <div className="symDiv">
              <h1 className="tknhd">Tokens</h1>
              <span className="tknsymbol">{tknSymbol.tokenSymbol}</span>
            </div>
            <div className="addtkn">
              <button type="button" className="ButtonBasetkn" onClick={handleShow}>
                Add tokens
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="col col-lg-8">
            <div className="table1">
              <Table responsive="lg" className="tb1">
                <thead>
                  <tr>
                    <th>HOLDER</th>
                    <th>BALANCE</th>
                  </tr>
                </thead>
                <tbody>
                  {tkn.map((item, i) => (
                    <tr key={i}>
                      <td style={{padding:12}}>{item.holder}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col col-lg-4 ">
          <div className="table1" style={{marginBottom:25}}>
            <Table responsive="lg" bordered={true} className="tb1">
              <thead>
                <tr>
                  <th>TOKEN INFO</th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td style={{padding:12}} >Total Supply</td>
                  <td style={{padding:12}}>{totalSupply}</td>
                </tr>
                <tr>
                  <td>Transferable</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>Token</td>
                  <td>{tknSymbol.tokenName}({tknSymbol.tokenSymbol})</td>
                </tr>
              </tbody>
            </Table>
            </div>
            <div className="table1">
            <Table responsive="lg" bordered={true}  className="tb1">
              <thead>
                <tr>
                  <th>OWNERSHIP DISTRIBUTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2}>Tokenholder stakes</td>
                </tr>
                {tkn.map((item, i) => (
                    <tr key={i}>
                      <td>{item.holder}</td>
                      <td>{item.amount/totalSupply*100}%</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            </div>
          </div>
        </div>
      </Container>
    </Col>
  );
};

export default Token1;
