import React from 'react';
import './button.css';

// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (<button className="button" type="button">{children}</button>);
}

export default Button;
