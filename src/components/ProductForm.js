import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, description });
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Nom du produit</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Prix du produit</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description du produit</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ajouter
      </Button>
    </Form>
  );
};

export default ProductForm;