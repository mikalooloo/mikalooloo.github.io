import React, { useContext, useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ThemeContext } from '../../theme';

export default function MCNavbar(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [sticky, setSticky] = useState("sticky-top");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  });

  const stickNavbar = () => {
    window.scrollY > 120 ? setSticky("fixed-top") : setSticky("sticky-top");
  }

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" className={props.stick} style={{'padding-top':'0.5%', 'padding-bottom':'0.5%'}}>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{"padding-left":"39%", "padding-right":"39%"}}>
            <Nav.Link as={NavLink} to="/minecraft" end>Home <span className="visually-hidden">(current)</span></Nav.Link>
            <Nav.Link as={NavLink} to="/minecraft/plugins">Plugins</Nav.Link>
            <Nav.Link as={NavLink} to="/minecraft/me">About Me</Nav.Link>
            <Nav.Link as={NavLink} to="/minecraft/help">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}