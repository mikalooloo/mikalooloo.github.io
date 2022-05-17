import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default function RLNavbar(props) {
    let activeClassName = "underline";

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={({ isActive }) => isActive ? activeClassName : undefined }>
                        <Nav.Link as={NavLink} to="/" >Home <span className="visually-hidden">(current)</span></Nav.Link>
                        <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
                        <Nav.Link as={NavLink} to="/minecraft">Minecraft</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}