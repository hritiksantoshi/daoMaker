import React from "react";
import { Col, Container, Table } from "react-bootstrap";
import "./Token1.css";
const Token1 = () => {
  const arr = [1, 2, 3];
  return (
    <Col lg="10">
      <Container>
        <div className="hdrDiv">
          <div className="tknheader">
            <div className="symDiv">
              <h1 className="tknhd">Tokens</h1>
              <span className="tknsymbol">DOT</span>
            </div>
            <div className="addtkn">
              <button type="button" className="ButtonBase">
                Add tokens
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="col col-lg-8">
            <Table responsive="lg" bordered={true} className="table1 rounded">
              <thead>
                <tr>
                  <th>HOLDER</th>
                  <th>BALANCE</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((item, i) => (
                  <tr key={i}>
                    <td>{item}</td>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col col-lg-4 ">
          <Table responsive="lg"  bordered={true} style={{borderRadius:10}}>
              <thead>
                <tr>
                  <th>TOKEN INFO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Total Supply</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Transferable</td>
                    <td>YES</td>
                </tr>
                <tr>
                    <td>Token</td>
                    <td>
                    DToken(DOT)
                    </td>
                </tr>
              </tbody>
            </Table>
            <Table responsive="lg" bordered={true} className='table'>
              <thead>
                <tr>
                  <th>OWNERSHIP DISTRIBUTION</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td colSpan={2}>Tokenholder stakes</td>
                 
                </tr>
                <tr>
                    <td >hrx</td>
                    <td>85%</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </Col>
  );
};

export default Token1;
