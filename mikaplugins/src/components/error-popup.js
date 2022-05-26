import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export default function ErrorPopup(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    window.location.reload(true);
  }
  //const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>An error has occured!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Unfortunately, something seems to have gone wrong!<br />I appreciate your patience :{`)`}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>okie dokie</Button>
      </Modal.Footer>
    </Modal>
  );
}