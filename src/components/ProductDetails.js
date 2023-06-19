import React from 'react';
import { Card } from 'react-bootstrap';

const ProductDetails = ({ product }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Prix : {product.price}</Card.Text>
        <Card.Text>Description : {product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
