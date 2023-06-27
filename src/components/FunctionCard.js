import React from 'react';
import { Card, Col } from 'react-bootstrap';

function FunctionCard({ title, description }) {
  // Générer une couleur aléatoire pour la carte
  const randomColor = () => {
    const colors = ['#FFC107', '#FF9800', '#FF5722', '#E91E63', '#9C27B0', '#3F51B5', '#2196F3', '#4CAF50', '#8BC34A'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Style de la carte avec une couleur aléatoire
  const cardStyle = {
    backgroundColor: randomColor(),
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    height: '200px',
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
      <Card style={cardStyle}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card>
    </div>
  );
}

export default FunctionCard;
