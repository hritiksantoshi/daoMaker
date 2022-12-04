import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./ClaimName.css";
import { StepContext } from "../DaoForm";

const ClaimName = () => {
  const { data, setData, currentStep , setStep } = useContext(StepContext);
  return (
    
    <div className="claimtemp ">
      <Form>
        <header className="name">
          <h1 className="nametxt">Claim a name</h1>
        </header>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ORGANIZATION'S NAME</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control type="text" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} placeholder="Type an organization name" />
            <InputGroup.Text>.blocktech.eth</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <section className="hfuhYh">
          Blocktech uses the
          <a
            href="https://ens.domains/"
            rel="noopener noreferrer"
            target="_blank"
            className="EUQBK"
          >
            Ethereum Name Service (ENS)
          </a>
          to assign names to organizations. The name you choose will be mapped
          to your organization’s Ethereum address and cannot be changed after
          you launch your organization.
        </section>
        <div className="Navigation">
         
          <button type="button" onClick={()=>{setStep(currentStep+1);setData({...data,name:`${data.name}.blocktech.eth`})}} disabled={data.name==''} className="ButtonBase">
            Next: Configure template
          </button>
        </div>
      </Form>
    </div>
   
    
  );
};

export default ClaimName;
