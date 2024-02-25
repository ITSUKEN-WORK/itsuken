import React from 'react';
import './button.css';

// eslint-disable-next-line react/prop-types
function Button({ children, size = 'md', variant = 'filled' }) {
  return (<button className="button" type="button" data-size={size} data-variant={variant}>{children}</button>);
}

export default Button;
