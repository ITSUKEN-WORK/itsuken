import React from 'react';
import './HomePage.css';
import Button from '../base/button/Button';

function HomePage() {
  return (
    <div className="homePage">
      <div className="aboutUs">
        <div className="title">ВАШ ЦИФРОВОЙ МИР НАЧИНАЕТСЯ ЗДЕСЬ</div>
        <div className="text">
          В целом, конечно, сплочённость команды
          профессионалов, в своём классическом
          представлении, допускает внедрение укрепления
          моральных ценностей. И нет сомнений, что
          интерактивные прототипы, превозмогая
          сложившуюся непростую экономическую ситуацию,
          своевременно верифицированы.
        </div>
        <div className="feedBack">
          <Button variant="filled" width="md" size="md">ПОДРОБНЕЕ</Button>
        </div>
      </div>
      <div className="image" />
    </div>
  );
}

export default HomePage;
