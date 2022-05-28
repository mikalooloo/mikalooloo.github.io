import "./toggle-accordion.css";
import React, { useContext } from "react";
import { ThemeContext } from "./theme";
// bootstrap
import { useAccordionButton } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ToggleAccordion(props) {
  let title = props.title ? props.title : "";
  let body = props.body ? props.body : "";
  let variant = props.variant ? props.variant : "spoilerButton";
  // theme
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const ToggleButton = ({children, eventKey}) => {
    return (
      <Button
        className={variant + (darkMode ? "-dark" : "-light")}
        size="sm"
        onClick={useAccordionButton(eventKey)}
      >
        {children}
      </Button>
    );
  };

  return (
    <Accordion>
      <Card className={(darkMode ? "toggleCard-dark" : "toggleCard-light") + "-" + variant}>
        <Card.Header>
          <ToggleButton eventKey="0">{title}</ToggleButton>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{body}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}