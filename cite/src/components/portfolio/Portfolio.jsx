import React from 'react';
import './portfolio.css';
import firstImage from './picture/case-container-1.png';
import secondImage from './picture/case-container-2.png';
import thirdImage from './picture/case-container-3.png';
import fourImage from './picture/case-container-4.png';
import fiveImage from './picture/case-container-5.png';
import PortfolioButton from '../portfolioButton/PortfolioBUtton';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-head">
          <div className="portfolio-description">
            <p className="description">
              Какой нибудь отличный тейк о том какие
              мы специалисты и воплотим все ваши мечты
            </p>
          </div>
          <div className="portfolio-title">
            <p className="title">НАШЕ ПОРТФОЛИО</p>
          </div>
        </div>
        <div className="cart-container">
          <div className="cards_column">
            <img src={firstImage} alt="кOртинка" />
            <img src={secondImage} alt="кOртинка" />
          </div>
          <div className="cards_column">
            <img src={thirdImage} alt="кOртинка" />
            <img src={fourImage} alt="кOртинка" />
          </div>
          <div className="cards_column">
            <img src={fiveImage} alt="кOртинка" />
            <PortfolioButton>ПОДРОБНЕЕ</PortfolioButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
