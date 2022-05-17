import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ThemeContext } from '../theme';

export default function MCNavbar(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let activeClassName = "underline";

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" sticky="top" style={{'padding-top':'0%'}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={({ isActive }) => isActive ? activeClassName : undefined }>
            <Nav.Link as={NavLink} to="/minecraft" >Home <span className="visually-hidden">(current)</span></Nav.Link>
            <Nav.Link as={NavLink} to="/minecraft/plugins">Plugins</Nav.Link>
            <Nav.Link as={NavLink} to="/minecraft/me">About Me</Nav.Link>
            <Nav.Link as={NavLink} to="/minecraft/help">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}