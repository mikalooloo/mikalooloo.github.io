import React from "react";
import { useOutletContext } from "react-router-dom";
import MCPluginCard from "./mc-plugin-card";
import { Container, Row, Col } from 'react-bootstrap';
// fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function MCPlugins(props) {
  const [plugins] = useOutletContext();

  return (
    <Container>
      <h1 className="text-center" style={{ 'paddingBottom': '2%' }}>Plugins</h1>
      <Row>
        {plugins ?
          plugins.map(item => {
            return (
              <Col key={item.id}>
                <MCPluginCard plugin={item} />
              </Col>
            );
          })
          :
          <div style={{ "textAlign": "center" }}>
            <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin /> Loading <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin />
          </div>}
      </Row>
    </Container>
  );
}