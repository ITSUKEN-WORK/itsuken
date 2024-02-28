import React from 'react';
import './AboutUs.css';
import Button from '../base/button/Button';
import ContactButtons from '../contactButtons/ContactButtons';

function AboutUs() {
  return (
    <div className="homePage">
      <div className="aboutUs_block">
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
          <ContactButtons />
        </div>
      </div>
      <div className="image" />
    </div>
  );
}

export default AboutUs;
