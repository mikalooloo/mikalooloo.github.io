import React from "react";
import { Link } from "react-router-dom";

export default function MCAboutMe() {

  return (
    <div className="aboutMe" style={{ "textAlign": "center" }}>
      <h1>About Me</h1>
      <h4>Want to <Link to="/minecraft/contact-me/">Contact Me?</Link></h4>
    </div>
  );
}