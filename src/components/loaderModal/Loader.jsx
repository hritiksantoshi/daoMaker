import React from "react";
import { Modal } from "react-bootstrap";
import { createContext, useContext } from "react";
import { Oval } from 'react-loader-spinner'
import { StepContext } from "../../App";
import "./Loader.css";
function LoaderModal() {
  const { loading } = useContext(StepContext);
  return (
    <Modal className="loader" show={loading} centered size="sm">
      <Modal.Body className="content">
        <Oval
          height={80}
          width={80}
          color="rgb(8, 190, 229)"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="rgb(8, 190, 229)"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />

      </Modal.Body>
    </Modal>
  );
}

export default LoaderModal;
