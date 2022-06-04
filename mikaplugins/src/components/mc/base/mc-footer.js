import "./mc-footer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../theme";
import FunFact from "./fun-fact";
import axiosInstance from "../../../apis/axios-instance";

export default function MCFooter(props) {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  // switches between light/dark mode
  const handleToggle = () => {
    if (darkMode) theme.setDarkMode(false);
    else theme.setDarkMode(true);
  };

  // get fun facts list
  const [funFacts, setFunFacts] = React.useState();

  React.useEffect(() => {
    axiosInstance.get("/public/fun-facts.json")
      .then(response => {
        // sorting ensures no repeats happen in the same session until all have been seen
        setFunFacts(response.data.map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value));
      });
  }, []);

  // load fun fact
  const [funFact, setFunFact] = React.useState({ "factId": "-1", "fact": "The fun fact here is that something messed up.", "source": "Me" });

  // shows fun fact modal
  const [showFact, setShowFact] = React.useState(false);
  const [factIndex, setFactIndex] = React.useState(0);

  const handleFact = () => {
    setFunFact(funFacts[factIndex]);
    if (factIndex + 1 >= funFacts.length) {
      setFactIndex(0);
      setFunFacts(funFacts.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value));
    }
    else {
      setFactIndex(factIndex + 1);
    }
    setShowFact(true);
  }

  return (
    <div>
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
            <Col><Link to="/minecraft/help/report-bug">Report a Bug</Link></Col>
            <Col><a href="https://ko-fi.com/mikalooloo" target="_blank" rel="noopener noreferrer">Send a Tip</a></Col>
            <Col><span onClick={handleToggle} onKeyDown={(e) => { if (e.key === "Enter") handleToggle() }} style={{ 'cursor': 'pointer' }} tabIndex="0">{darkMode ? "Light Mode" : "Dark Mode"}</span></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col><Link to="/minecraft/help/suggest-feature">Suggest a Feature</Link></Col>
            <Col><Link to="/minecraft/help/leave-review">Leave a Review</Link></Col>
            <Col><span onClick={handleFact} onKeyDown={(e) => { if (e.key === "Enter") handleFact() }} style={{ 'cursor': 'pointer' }} tabIndex="0">Fun Fact</span></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col><Link to="/minecraft/help/ask-question">Ask a Question</Link></Col>
            <Col><Link to="/minecraft/contact-me/compliment">Give a Compliment</Link></Col>
            <Col><Link to="/minecraft/contact-me">Contact Me</Link></Col>
          </Row>
        </Container>
        <section className={darkMode ? "dark-footer-border" : "light-footer-border"}>
          <span>Mikalooloo</span>
        </section>
      </footer>
      <FunFact show={showFact} onHide={() => setShowFact(false)} factId={funFact.factId} fact={funFact.fact} source={funFact.source} />
    </div>
  );
}