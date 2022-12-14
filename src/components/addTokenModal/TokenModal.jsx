import React, { useState ,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { StepContext } from "../../App.js";
function TokenModal() {
    const {
        showTokenModal,
        setShowTokenModal,
        handleClose,
        handleShow
      } = useContext(StepContext);

 

  return (
    <>

      <Modal show={showTokenModal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>RECIPIENT (MUST BE A VALID ETHEREUM ADDRESS)</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NO. OF TOKENS TO ADD</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ADD TOKEN
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TokenModal;