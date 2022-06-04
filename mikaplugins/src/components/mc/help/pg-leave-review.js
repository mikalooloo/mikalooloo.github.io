import "../plugins/pg-plugin.css";
import React from "react";
import { ThemeContext } from '../../theme';
import { Link } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function LeaveReview(props) {
  // get theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  return (
    <Container className={darkMode ? "dark-linkText" : "light-linkText"}>
      <h1 className="text-center" style={{ "paddingBottom": "3%" }}>Leave a Review</h1>
      <h4>Looking to review one of my plugins? &nbsp;<FontAwesomeIcon icon={solid("gamepad")} /></h4>
      <p>
        Yay! I appreciate it! Before doing so, make sure you don't actually want to:&nbsp;
        <Link to="/minecraft/help/report-bug">Report a Bug</Link>,&nbsp;
        <Link to="/minecraft/help/suggest-feature">Suggest a Feature</Link>, or&nbsp;
        <Link to="/minecraft/help/ask-question">Ask a Question</Link>.<br /><br />
        If you do want to review a plugin, first find the page for that plugin here on my website and go to the "Support" section -- it'll bring you straight to my plugin's Spigot page, where you can leave a review.
        You can also go straight to my Spigot resources page <a href="https://www.spigotmc.org/resources/authors/mikalooloo.1570246/" target="_blank" rel="noopener noreferrer">here</a> to find the right plugin page.<br /><br />
        If you'd like to leave a private review just for me, feel free to <Link to="/minecraft/contact-me/review">Contact Me</Link> instead.
      </p>
    </Container>
  );
}