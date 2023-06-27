import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaUser, FaSearch } from 'react-icons/fa';

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" className='mx-4 justify-content-center sticky-top'>
      {/* Logo de l'entreprise a gauche */}
      <Navbar.Brand className='mr-auto'>Mon Entreprise</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        {/* Menu de navigation au milieu */}
        <Nav className="mx-auto">
          <Nav.Link href="#accueil">Accueil</Nav.Link>
          <Nav.Link href="#categories">Catégories</Nav.Link>
          <Nav.Link href="#produits">Produits</Nav.Link>
          <Nav.Link href="#apropos">À Propos</Nav.Link>
        </Nav>

        {/* Barre de recherche a droite */}
        <div className="ml-auto d-flex">
          <Form inline className="mr-4">
            <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
          </Form>
          <Button variant="outline-success"><FaSearch /></Button>
        </div>

        {/* Dropdown de profil */}
        <Dropdown alignRight className="ms-2">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaUser />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item href="#profil">Profil</Dropdown.Item>
            <Dropdown.Item href="#deconnexion">Déconnexion</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;