import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Home from './components/Home';

function App() {

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