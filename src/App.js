import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductForm from './components/ProductForm';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import FunctionCard from './components/FunctionCard';
import { Row } from 'react-bootstrap';

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <div className='container-fluid'>
      <CustomNavbar />
      {/* <Container>
        <Row>
          <Col md={6}>
            <h2>Liste des produits</h2>
            <ProductList
              products={products}
              onViewDetails={handleViewDetails}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Col>
          <Col md={6}>
            <h2>Détails du produit</h2>
            {selectedProduct ? (
              <ProductDetails product={selectedProduct} />
            ) : (
              <p>Sélectionnez un produit pour voir les détails.</p>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Ajouter un produit</h2>
            <ProductForm onSubmit={handleSubmit} />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default App