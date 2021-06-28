import React from "react";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";

import './Navbar.css';

const NavComponent = (props) => {
  return (
    <Navbar bg={props.bgColor} expand="lg">
      <Navbar.Brand>
        <Link to={props.homeLink}>{props.header}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <NavDropdown title={props.user} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
};

export default NavComponent;
