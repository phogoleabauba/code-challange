import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="light"
      fixed="top"
      className="shadow-md "
    >
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          Code Challenge{" "}
          <span className="fw-light">top 20 StackOverflow users</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Header;
