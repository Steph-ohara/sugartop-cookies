import React from "react";
import { 
  Container, 
  Navbar, 
  Nav, 
  NavDropdown, 
  NavLink, } from "react-bootstrap";

function Navigation() {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">
    {/* <img
          alt="AS-Web-Logo"
          src="/AS Logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} */}
        Sugartop Cookies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        <Nav.Link href="/About">About</Nav.Link>

        <Nav.Link href="/Gallery">Gallery</Nav.Link>

        <Nav.Link href="/Pricing">Pricing</Nav.Link>

        <Nav.Link href="/Contact">Contact</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navigation;