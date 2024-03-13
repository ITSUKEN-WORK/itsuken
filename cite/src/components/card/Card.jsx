import React from 'react';
import './card.css';
import Button from '../base/button/Button';

function Card() {
  return (
    <div className="card">
      <div className="right_text_container">
        <div className="card__title">НАШИ ИНСТРУМЕНТЫ</div>
        <div className="card__text">
          В целом, конечно, сплочённость команды
          профессионалов, в своём классическом
          представлении, допускает внедрение укрепления моральных ценностей.
          И нет сомнений, что интерактивные прототипы,
          превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы.
        </div>
        <Button variant="filled" width="md" size="md">ПОДРОБНЕЕ</Button>
      </div>
    </div>
  );
}

export default Card;
