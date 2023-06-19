import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductForm from './components/ProductForm';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleViewDetails = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  const handleEdit = (productId) => {
    // Implement edit functionality here
    console.log('Edit product:', productId);
  };

  const handleDelete = (productId) => {
    // Implement delete functionality here
    console.log('Delete product:', productId);
  };

  const handleSubmit = async (productData) => {
    try {
      const response = await axios.post('http://localhost:5000/products', productData);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

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

export default App;
