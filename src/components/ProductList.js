import React from 'react';
import { Button, Table } from 'react-bootstrap';

const ProductList = ({ produits, onViewDetails, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {produits.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <Button variant="primary" onClick={() => onViewDetails(product.id)}>
                Détails
              </Button>{' '}
              <Button variant="warning" onClick={() => onEdit(product.id)}>
                Modifier
              </Button>{' '}
              <Button variant="danger" onClick={() => onDelete(product.id)}>
                Supprimer
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
