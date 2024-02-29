import React from 'react';
import './services.css';
import ServicesCard from './servicesCard';

function Services() {
  return (
    <div className="services">
      <div className="container1">
        <div className="textBlock">
          <div className="texBlock_element">НАШИ УСЛУГИ</div>
          <div className="texBlock_element2">
            Какой нибудь отличный тейк о том какие
            мы специалисты и воплотим все ваши мечты
          </div>
        </div>
        <div className="cards">
          <ServicesCard
            title="Поддержка
            сайтов"
            description="Сложно сказать, почему
сторонники тоталитаризма
в науке функционально разнесены на
независимые элементы."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
