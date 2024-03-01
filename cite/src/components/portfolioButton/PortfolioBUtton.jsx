import React from 'react';
import './portfolioButton.css';

// eslint-disable-next-line react/prop-types
function PortfolioButton({ children }) {
  return (
    <button className="portfolio_button" type="button">{children}</button>
  );
}

export default PortfolioButton;
