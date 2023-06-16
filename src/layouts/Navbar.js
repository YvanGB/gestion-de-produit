import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
      <Navbar.Brand href="/">Mon site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="inscription">Inscription</Nav.Link>
          <Nav.Link href="connexion">Connexion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;