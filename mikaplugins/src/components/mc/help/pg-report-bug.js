import "../plugins/pg-plugin.css";
import React from "react";
import { ThemeContext } from '../../theme';
import { Link } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ReportBug(props) {
  // get theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  return (
    <Container className={darkMode ? "dark-linkText" : "light-linkText"}>
      <h1 className="text-center" style={{ "paddingBottom": "3%" }}>Report a Bug</h1>
      <h4>Looking to report a bug for one of my plugins? &nbsp;<FontAwesomeIcon icon={solid("gamepad")} /></h4>
      <p>
        Awesome! Find the page for that plugin here on my website and find the "Report a Bug" section -- it'll walk you through on how to do so!<br />
        If you end up needing help, you can always <Link to="/minecraft/contact-me">Contact Me</Link>.
      </p>
      <h4 style={{ "paddingTop": "2%" }}>Looking to report a bug on this website? &nbsp;<FontAwesomeIcon icon={solid("arrow-pointer")} /></h4>
      <p>
        Did you find a spelling mistake or a link that goes to the wrong place? Needless to say, I appreciate you wanting to tell me!<br />
        <Link to="/minecraft/contact-me">Contact Me</Link> and let me know where you found this error and I'll get to fixing it when I can.
      </p>
    </Container>
  );
}