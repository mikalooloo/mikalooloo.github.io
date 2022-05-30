import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ThemeContext } from '../../theme';

export default function MCNavbar(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" className={props.stick} style={{'paddingTop':'0.5%', 'paddingBottom':'0.5%'}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{"paddingLeft":"39%", "paddingRight":"39%"}}>
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