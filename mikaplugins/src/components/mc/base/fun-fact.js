import "../plugins/pg-plugin.css";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ThemeContext } from '../../theme';

export default function FunFact(props) {
  // get theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={darkMode ? "dark-modal" : "light-modal"}
    >
      <Modal.Header>Fun Fact #{props.factId}</Modal.Header>
      <Modal.Body className={darkMode ? "dark-linkText" : "light-linkText"}>
        {props.fact}<br /><br />
        {props.source.startsWith("http") ?
          <cite>Source:&nbsp;<a href={props.source} target="_blank" rel="noopener noreferrer">{props.source}</a></cite> :
          <cite>Source:&nbsp;{props.source}</cite>}
      </Modal.Body>
      <Modal.Footer>
        <Button aria-label="Close" onClick={props.onHide} variant="secondary">Good to know</Button>
      </Modal.Footer>
    </Modal >
  );
}