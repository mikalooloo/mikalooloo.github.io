import "../plugins/pg-plugin.css";
import React from "react";
import { ThemeContext } from '../../theme';
import { Link } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function SuggestFeature(props) {
  // get theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  return (
    <Container className={darkMode ? "dark-linkText" : "light-linkText"}>
      <h1 className="text-center" style={{ "paddingBottom": "3%" }}>Suggest a Feature</h1>
      <h4>Looking to suggest a feature for one of my plugins? &nbsp;<FontAwesomeIcon icon={solid("gamepad")} /></h4>
      <p>
        Yay! Find the page for that plugin here on my website and find the "Suggest a Feature" section -- it'll walk you through on how to do so!<br />
        If you end up needing help, you can always <Link to="/minecraft/contact-me">Contact Me</Link>.
      </p>
      <h4 style={{ "paddingTop": "2%" }}>Looking to suggest a feature for this website? &nbsp;<FontAwesomeIcon icon={solid("arrow-pointer")} /></h4>
      <p>
        Did you think of something that could improve this website? Maybe improve the accessibility or make something easier to find?<br />
        No matter what it is, <Link to="/minecraft/contact-me">Contact Me</Link> and let me know what you're thinking; I'll see if I can implement it.
      </p>
    </Container>
  );
}