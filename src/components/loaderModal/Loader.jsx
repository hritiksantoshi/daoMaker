import React from "react";
import { Modal } from "react-bootstrap";
import { createContext ,useContext} from "react";
import LoadingOverlay from "react-loading-overlay";
import HashLoader from "react-spinners/HashLoader";
import {StepContext} from "../DaoForm"
import './Loader.css';
function LoaderModal() {
    const { loading } = useContext(StepContext);
  return (
    <Modal className="loader" show={loading}  centered size="sm">
    <Modal.Body className="content">
        <HashLoader
        color={"#36d7b7"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </Modal.Body>
    </Modal>
  );
}

export default LoaderModal;
