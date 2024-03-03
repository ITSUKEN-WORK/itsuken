import React from 'react';
import './services_card.css';
import Button from '../base/button/Button';

// eslint-disable-next-line react/prop-types
function ServicesCard({ title, description }) {
  return (
    <div className="cardContainer">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <Button width="sm" size="md" variant="outlined">Подробнее</Button>
    </div>
  );
}

export default ServicesCard;
