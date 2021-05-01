import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} fade={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {props.passedInfo.Title.Message}
        </ModalHeader>
        <ModalBody>{props.passedInfo.Message}</ModalBody>
        <ModalFooter>
          <Button
            color={props.passedInfo.Status !== "error" ? "success" : "danger"}
            onClick={toggle}
          >
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
