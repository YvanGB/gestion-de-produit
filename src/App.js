import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductForm from './components/ProductForm';

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Container>
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
    </Container>
  );
};

export default App