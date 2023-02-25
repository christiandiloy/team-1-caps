
import React from "react";
import './home.css'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-bg w-100" variant="dark" style={{backgroundColor: '#08002a'}}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/assets/images/goods.jpg"
            alt="Good Source"
            className="gs-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="/aegis">AEGIS</Nav.Link>
            <Nav.Link href="/geekvape-u">GEEKVAPE-U</Nav.Link>
            <Nav.Link href="/geekvape-z">GEEKVAPE-Z</Nav.Link>
            <Nav.Link href="/wenax">WENAX</Nav.Link>
            <Nav.Link href="/obelisk">OBELISK</Nav.Link>
            <Nav.Link href="/coils">COILS</Nav.Link>
            <NavDropdown title="SUPPORT" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/FAQ">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contact-us">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/store">
              STORE
            </Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-warning">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
