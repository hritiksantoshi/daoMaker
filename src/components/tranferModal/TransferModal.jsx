import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {withdraw } from "../../utils/transfer";
import { StepContext } from "../../App.js";
function TransferModal() {
  const { showTransferModal,setShowTransferModal, handleClose, handleShow,setProposal,proposal } = useContext(StepContext);
   
  const [token,setToken] = useState({
    tknaddress:"",
    tokens:""
  })
  const handleProposal = async () => {
    handleClose();
    const res = await withdraw();
    if(res){
      setProposal([...proposal,1]);
    }
  };

  return (
    <>
      <Modal
        show={showTransferModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                RECIPIENT (MUST BE A VALID ETHEREUM ADDRESS)
              </Form.Label>
              <Form.Control type="text" name="tokenAddress" onChange={(e) =>setToken({...token,tknaddress:e.target.value}) } placeholder="" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NO. OF TOKENS TO ADD</Form.Label>
              <Form.Control  type="text" name="tokenNumber" onChange={(e) =>setToken({...token,tokens:e.target.value}) } placeholder="" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleProposal}>
            ADD TOKEN
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TransferModal;
