/* eslint-disable object-curly-newline */
import React from 'react';
import './button.css';

// eslint-disable-next-line react/prop-types
function Button({ children, size = 'md', variant = 'filled', width = 'sm', onClick = null }) {
  return (<button className="button" type="button" data-size={size} data-variant={variant} data-width={width} onClick={() => { if (onClick) onClick() }}>{children}</button>);
}

export default Button;
