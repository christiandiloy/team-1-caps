import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function LoginNav() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-bg w-100"
        variant="dark"
        style={{ backgroundColor: "#08002a" }}
      >
        <Container className="my-3">
          <h3 className="text-light lead">
            WARNING: Nicotine is an addictive chemical. Only for adults. Anyone
            below the age of 21 is prohibited from buying e-cigarette.
          </h3>
        </Container>
      </Navbar>
    </>
  );
}
