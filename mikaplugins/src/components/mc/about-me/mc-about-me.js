import "../plugins/pg-plugin.css";
import React from "react";
import { ThemeContext } from "../../theme";
import { Link } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function MCAboutMe() {
  // setting the theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  // feather icon state
  const [featherIcon, setFeatherIcon] = React.useState(solid("feather-pointed"));
  // allow swapping of feather icon
  const swapFeatherIcon = () => {
    if (featherIcon === solid("feather-pointed")) setFeatherIcon(solid("feather"));
    else setFeatherIcon(solid("feather-pointed"));
  };

  // back up arrows
  const BackUpArrow = () => {
    // this function is so that you are sent to "#overview" even if your current URL is "#overview"
    const resetHash = () => {
      window.location.hash = "#overview";
    }
    return (
      <span className={darkMode ? "dark-linkArrow" : "light-linkArrow"}>&nbsp;&nbsp;<Link to="#overview" onClick={resetHash}><FontAwesomeIcon icon={solid("caret-up")} /></Link></span>
    );
  }

  return (
    <Container>
      <h1 style={{ "textAlign": "center" }}>About Me</h1>

      {/* OVERVIEW */}

      <div className="iconDivider">
        <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="horizontal" />
        <FontAwesomeIcon icon={featherIcon} size="xl" onClick={swapFeatherIcon} transform={{ rotate: -50 }} id="overview" tabIndex="-1" />
        <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} />
      </div>

      <Row>
        <Col>
          WIP
        </Col>
        <Col xs={5}>
          <Table variant={darkMode ? "dark" : "light"} style={{ "textAlign": "center" }}>
            <thead>
              <tr><th>Table of Contents</th></tr>
            </thead>
            <tbody className={darkMode ? "dark-linkText" : "light-linkText"}>
              <tr><td><Link to="#overview">overview</Link></td></tr>
              <tr><td><Link to="#occupation">occupation</Link></td></tr>
              <tr><td><Link to="#interests">interests</Link></td></tr>
              <tr><td><Link to="#goals">goals</Link></td></tr>
              <tr><td><Link to="#contact">contact me</Link></td></tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* OCCUPATION */}

      <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="occupation" tabIndex="-1" /></div>
      <div className="occupation">
        <h1 className="sectionTitle">
          occupation <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
          <BackUpArrow />
        </h1>
        <p style={{ "textAlign": "center" }}>
          Student at Washington State University<br />
          Bachelor of Science in Computer Science, Mathematics Minor
        </p>
      </div>

      {/* INTERESTS */}

      <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="interests" tabIndex="-1" /></div>
      <div className="interests">
        <h1 className="sectionTitle">
          <FontAwesomeIcon icon={solid("crow")} size="lg" /> interests
          <BackUpArrow />
        </h1>
        <ul style={{ "textAlign": "center" }}>
          <li>Coding</li>
          <li>Birds</li>
        </ul>
      </div>

      {/* GOALS */}

      <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="goals" tabIndex="-1" /></div>
      <div className="goals">
        <h1 className="sectionTitle">
          goals <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
          <BackUpArrow />
        </h1>
        <ul style={{ "textAlign": "center" }}>
          <li>code</li>
          <li>look at bird</li>
        </ul>
      </div>

      {/* CONTACT ME */}

      <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="contact" tabIndex="-1" /></div>
      <div className="contactMe">
        <h1 className="sectionTitle">
          contact me <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
          <BackUpArrow />
        </h1>
        <h4>Want to <Link to="/minecraft/contact-me/">Contact Me?</Link></h4>
      </div>

    </Container>
  );
}