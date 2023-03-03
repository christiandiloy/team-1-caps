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
        <Container className="my-3 justify-content-center text-center">
          <div className="m-2 p-3 container border border-warning text-warning">
            <h3 className="lead">
              WARNING: Anyone below the age of 21 is prohibited from buying
              e-cigarette.
            </h3>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
