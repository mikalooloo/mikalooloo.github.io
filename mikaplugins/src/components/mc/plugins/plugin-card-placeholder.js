import React from "react";
// bootstrap
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

export default function PluginCardPlaceholder(props) {
  const darkMode = props.darkMode;

  return (
    <Card bg={darkMode ? "dark" : "light"} text={darkMode ? "white" : "black"}>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={5} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={10} />
        </Placeholder>
      </Card.Body>
      <Card.Footer>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={3} />
        </Placeholder>
      </Card.Footer>
    </Card>
  );
}