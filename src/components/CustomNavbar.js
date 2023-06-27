import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaSignOutAlt, FaSearch } from 'react-icons/fa';

function CustomNavbar() {
  return (
    <Navbar bg="dark" expand="lg" className='px-4 justify-content-center sticky-top'>
      {/* Logo de l'entreprise a gauche */}
      <Navbar.Brand className='mr-auto brand-style'>PLUTON</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        {/* Menu de navigation au milieu */}
        <Nav className="mx-auto">
          <Nav.Link href="#accueil" className='nav-item'>Accueil</Nav.Link>
          <Nav.Link href="#categories" className='nav-item'>Catégories</Nav.Link>
          <Nav.Link href="#produits" className='nav-item'>Produits</Nav.Link>
          <Nav.Link href="#apropos" className='nav-item'>À Propos</Nav.Link>
        </Nav>

        {/* Barre de recherche a droite */}
        <div className="ml-auto d-flex">
          <Form inline className="mr-4">
            <div className="input-group">
              <FormControl type="text" placeholder="Rechercher" className="bg-dark text-white shadow-none custom-input" />
              <Button variant="custom" className="custom-icon-button">
                <FaSearch className="custom-icon" />
              </Button>
            </div>
          </Form>
        </div>

        {/* Dropdown de profil */}
        <Button variant="custom" className="ml-auto ms-2 custom-icon-button">
          <FaSignOutAlt className="custom-icon" />
        </Button>


      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;