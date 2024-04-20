import React from "react";

import logo from "../../assets/images/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      data-bs-theme="dark"
      className="bg-black text-light pt-3 p-3"
    >
      <Container fluid>
        <Navbar.Brand className="text-light" href="#">
          <img src={logo} style={{ width: "150px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ color: "white" }}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0 text-center">
            <Nav.Link className="text-light me-3 text-center" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text-light me-3 text-center" href="#action2">
              About Us
            </Nav.Link>
            <Nav.Link className="text-light me-3 text-center" href="#action3">
              Careers
            </Nav.Link>
          </Nav>
          <div className="text-center">
            <a
              className="d-none d-lg-inline me-4"
              style={{ textDecoration: "none", color: "#fff" }}
              href="mailto::info@hopebridge.in"
            >
              info@hopebridge.in
            </a>
            <Button href="#action4" variant="outline-danger bg-dark text-light">
              Contact Us
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
