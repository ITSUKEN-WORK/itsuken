import React from 'react';
import './textFeedBack.css';

// eslint-disable-next-line react/prop-types
function TextFeedBack({ children }) {
  return (
    <div className="text__feedback">
      <div className="feedback__title">
        <p className="feedback__title__text">
          ВАШ ЦИФРОВОЙ МИР НАЧИНАЕТСЯ ЗДЕСЬ
        </p>
      </div>
      <div className="feedback__description">
        <p className="feedback__description__text">{children}</p>
      </div>
    </div>
  );
}

export default TextFeedBack;
