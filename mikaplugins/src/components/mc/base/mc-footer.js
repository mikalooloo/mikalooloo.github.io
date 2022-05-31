import './mc-footer.css';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../theme';

export default function MCFooter(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;

  const handleToggle = () => {
    if (darkMode) theme.setDarkMode(false);
    else theme.setDarkMode(true);
  };

  return (
    <footer className={darkMode ? "dark-footer-body" : "light-footer-body"}>
      <section className={darkMode ? "dark-footer-border" : "light-footer-border"}>ㅤ</section>
      <Container className="footer-text" style={{ 'marginTop': '1%', 'marginBottom': '1%' }}>
        <Row style={{ 'fontWeight': 'bold' }}>
          <Col>Popular Plugins</Col>
          <Col>Help</Col>
          <Col>Support</Col>
          <Col>Other</Col>
        </Row>
        <Row>
          <Col><Link to="/minecraft/plugins/0">Mika's Directional</Link></Col>
          <Col>Report a Bug</Col>
          <Col><a href="https://ko-fi.com/mikalooloo" target="_blank" rel="noopener noreferrer">Send a Tip</a></Col>
          <Col><span onClick={handleToggle} style={{ 'cursor': 'pointer' }}>{darkMode ? "Light Mode" : "Dark Mode"}</span></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>Suggest a Feature</Col>
          <Col>Leave a Review</Col>
          <Col>Fun Fact</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><Link to="/minecraft/contact-me">Contact Me</Link></Col>
          <Col><Link to="/minecraft/contact-me">Give a Compliment</Link></Col>
          <Col></Col>
        </Row>
      </Container>
      <section className={darkMode ? "dark-footer-border" : "light-footer-border"}>
        <span>Mikalooloo</span>
      </section>
    </footer>
  );
}