import "../plugins/pg-plugin.css";
import React from "react";
import { ThemeContext } from '../../theme';
import { Link } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function NotFound(props) {
  // get theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  const emojis =
    [
      solid("face-angry"),
      solid("face-dizzy"),
      solid("face-flushed"),
      solid("face-frown"),
      solid("face-frown-open"),
      solid("face-grin-beam-sweat"),
      solid("face-kiss"),
      solid("face-meh-blank"),
      solid("face-sad-cry"),
      solid("face-sad-tear"),
      solid("face-surprise")
    ]

  return (
    <Container className={darkMode ? "dark-linkText" : "light-linkText"}>
      <h1 className="text-center" style={{ "paddingBottom": "3%" }}>Page Not Found</h1>
      <h4 className="text-center">Sorry about that! &nbsp;<FontAwesomeIcon icon={emojis[emojis.length * Math.random() | 0]} /></h4>
      <p className="text-center" style={{ "paddingTop": "1%" }}>
        This page cannot be found. If you think this is a mistake, feel free to <Link to="/minecraft/contact-me/not-found">Contact Me</Link> and let me know!
      </p>
    </Container>
  );
}