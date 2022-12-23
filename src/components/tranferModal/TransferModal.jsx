import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {withdraw } from "../../utils/transfer";
import { StepContext } from "../../App.js";
function TransferModal() {
  const { showTransferModal,setShowTransferModal, handleClose, handleShow,setProposal,proposal,payee,setPayee } = useContext(StepContext);
   
 
  const handleProposal = async () => {
    handleClose();
    const res = await withdraw(payee.address,payee.amount);
    if(res){
      setProposal([...proposal,1]);
    }
  };

  const formSubmit = (e) =>{
    e.preventDefault();
  setPayee({
    address:e.target.address.value,
    amount:e.target.payee.value
  })
   handleProposal();
  }


  return (
    <>
      <Modal
        show={showTransferModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>NEW TRANSFER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                RECIPIENT (MUST BE A VALID ETHEREUM ADDRESS)
              </Form.Label>
              <Form.Control type="text" name="address"  placeholder="" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>WITHDRAW AMOUNT</Form.Label>
              <Form.Control  type="text" name="payee"  placeholder="" autoFocus />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" >
            Withdraw
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TransferModal;
