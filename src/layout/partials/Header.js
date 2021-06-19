import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/crm.png";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="md">
      <Navbar.Brand>
        <img
          src={logo}
          alt="logo"
          width="100px"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/tickets">Tickets</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
