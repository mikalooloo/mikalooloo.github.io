import React from "react";
import PluginCard from "./plugin-card";
import PluginCardPlaceholder from "./plugin-card-placeholder";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../../theme";
// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function PluginsList(props) {
  const [plugins] = useOutletContext();
  // setting the theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  return (
    <Container>
      <h1 className="text-center" style={{ 'paddingBottom': '2%' }}>Plugins</h1>
      <Row>
        {plugins ?
          plugins.map(item => {
            return (
              <Col lg={6} key={item.id}>
                <PluginCard plugin={item} darkMode={darkMode} />
              </Col>
            );
          })
          :
          <Row>
            <div style={{ "textAlign": "center", "paddingBottom": "3%" }}>
              <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin /> Loading <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin />
            </div>
            <Col lg={6} key="0">
              <PluginCardPlaceholder darkMode={darkMode} />
            </Col>
            <Col lg={6} key="1">
              <PluginCardPlaceholder darkMode={darkMode} />
            </Col>
          </Row>}
      </Row>
    </Container>
  );
}