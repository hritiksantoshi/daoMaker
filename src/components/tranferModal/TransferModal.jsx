import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { withdraw ,deposit} from "../../utils/transfer";
import { StepContext } from "../../App.js";
function TransferModal() {
  const {
    showTransferModal,
    setShowTransferModal,
    handleClose,
    handleShow,
    setProposal,
    proposal,
    payee,
    setPayee,
    setDeposit
  } = useContext(StepContext);
  const [tform, setTform] = useState(false);

  const handleProposal = async (address, amount) => {
    handleClose();
    const res = await withdraw(address, amount);
    if (res) {
      setProposal([...proposal, 1]);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setPayee({
      address: e.target.address.value,
      amount: e.target.payee.value,
    });
    handleProposal(e.target.address.value, e.target.payee.value);
  };

  const depositAmount = async(amount) =>{
    handleClose();
    const res = await deposit(amount);
    if(res){

    }
  }


  const formSubmit2 = (e) => {
    e.preventDefault();
    setDeposit(e.target.depamount.value);
    depositAmount(e.target.depamount.value);
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
          <div
            className="btnForm"
            style={{ borderBottom: "1px solid #dee2e6", marginBottom: 18 }}
          >
            <Button
              variant="light"
              active={tform ? false : true}
              onClick={() => setTform(false)}
            >
              Deposit
            </Button>{" "}
            <Button
              variant="light"
              active={tform ? true : false}
              onClick={() => setTform(true)}
            >
              Withdrawal
            </Button>
          </div>
          {tform ? (
            <Form onSubmit={formSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  RECIPIENT (MUST BE A VALID ETHEREUM ADDRESS)
                </Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>WITHDRAW AMOUNT</Form.Label>
                <Form.Control
                  type="text"
                  name="payee"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                type="submit"
                variant="primary"
                style={{ marginLeft: 10 }}
              >
                Withdraw
              </Button>
            </Form>
          ) : (
            <Form onSubmit={formSubmit2}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>TOKEN</Form.Label>
                <Form.Select aria-label="Default select example"  autoFocus>
                  <option>Select a Token</option>
                  <option value="1">Eth</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>DEPOSIT AMOUNT</Form.Label>
                <Form.Control
                  type="text"
                  name="depamount"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                type="submit"
                variant="primary"
                style={{ marginLeft: 10 }}
              >
                Deposit
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TransferModal;
