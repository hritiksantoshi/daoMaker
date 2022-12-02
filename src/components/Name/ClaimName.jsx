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
    <div className="claimtemp col-lg-10">
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
          {/* <button type="button" className="ButtonBase">
            <span className="Buttontxt">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="Navigationsvg"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.2"
                  d="M18.434 11.434H5.566a.566.566 0 000 1.132h12.869a.565.565 0 100-1.132z"
                ></path>
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.2"
                  d="M6.366 12l4.426-4.426a.565.565 0 10-.8-.8L5.166 11.6a.566.566 0 000 .8l4.826 4.826a.564.564 0 00.8 0 .565.565 0 000-.8L6.366 12z"
                ></path>
              </svg>
            </span>
            Back
          </button> */}
          <button type="button" onClick={()=>setStep(currentStep+1)} disabled={data.name==''} className="ButtonBase">
            Next: Configure template
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ClaimName;
