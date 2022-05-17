import './mc-footer.css';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../theme';

export default function MCFooter(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleToggle = () => {
    if (darkMode) theme.dispatch({ type: "lightMode" });
    else theme.dispatch({ type: "darkMode" });
  };

  return (
    <footer className={darkMode ? "dark-footer-body" : "light-footer-body"}>
      <section className={darkMode ? "dark-footer-border" : "light-footer-border"}>ㅤ</section>
      <Container style={{'margin-top': '1%', 'margin-bottom': '1%'}}>
        <Row style={{'font-weight':'bold'}}>
          <Col>Popular Plugins</Col>
          <Col>Help</Col>
          <Col>Support</Col>
          <Col>Other</Col>
        </Row>
        <Row>
          <Col>Mika's Directional</Col>
          <Col>Report a Bug</Col>
          <Col>Send a Compliment</Col>
          <Col><span onClick={handleToggle} style={{'cursor':'pointer'}}>{darkMode ? "Light Mode" : "Dark Mode"}</span></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>Suggest a Feature</Col>
          <Col>Leave a Kind Review</Col>
          <Col>Fun Fact</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>Contact Me</Col>
          <Col>Tip Me</Col>
          <Col></Col>
        </Row>
      </Container>
      <section className={darkMode ? "dark-footer-border" : "light-footer-border"}>
        <span>Mikalooloo</span>
      </section>
    </footer>
  );
}