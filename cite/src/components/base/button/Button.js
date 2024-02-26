/* eslint-disable object-curly-newline */
import React from 'react';
import './button.css';

// eslint-disable-next-line react/prop-types
function Button({ children, size = 'md', variant = 'filled', width = 'sm' }) {
  return (<button className="button" type="button" data-size={size} data-variant={variant} data-width={width}>{children}</button>);
}

export default Button;
