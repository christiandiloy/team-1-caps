import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import "./store.css";
import { useState } from "react";

function StoreNavBar() {
  const [currentLink, setCurrentLink] = useState(
    window.location.pathname.substring(1)
  );
  let isUserLoggedIn = false;
  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      // do nothing, continue lang
    } else {
      localStorage.clear();
      window.location.href = "http://localhost:3000/login";
    }
  } catch (error) {
    localStorage.clear();
    window.location.href = "http://localhost:3000/login";
  }
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/store/all-products">All Products</Nav.Link>
            <Nav.Link href="/store/box-mods">Box Mods</Nav.Link>
            <Nav.Link href="/store/replacement-pods">Replacement Pods</Nav.Link>
            <Nav.Link href="/store/replacement-coils">Replacement Coils</Nav.Link>
            <NavDropdown title="Vape Kits" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Box mod kit
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pod Kit</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StoreNavBar;
