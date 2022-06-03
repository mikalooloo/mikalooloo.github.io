import "../plugins/pg-plugin.css";
import React from "react";
import { ThemeContext } from '../../theme';
import { Link } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function AskQuestion(props) {
  // get theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  return (
    <Container className={darkMode ? "dark-linkText" : "light-linkText"}>
      <h1 className="text-center" style={{ "paddingBottom": "3%" }}>Ask a Question</h1>
      <h4>Looking to ask a question about one of my plugins? &nbsp;<FontAwesomeIcon icon={solid("gamepad")} /></h4>
      <p>
        No worries! Find the page for that plugin here on my website and find the "Ask a Question" section -- it'll walk you through on how to do so!<br />
        If it gets too complicated for you, you can always <Link to="/minecraft/contact-me">Contact Me</Link> instead.
      </p>
      <h4 style={{ "paddingTop": "2%" }}>Looking to ask a question about this website? &nbsp;<FontAwesomeIcon icon={solid("arrow-pointer")} /></h4>
      <p>
        If you're super confused about something and need help, don't be afraid to <Link to="/minecraft/contact-me">Contact Me</Link>.<br />
        This is usually reflective of my website designing skills and not you, so I would appreciate the feedback on what's not clear too! :{`)`}
      </p>
    </Container>
  );
}