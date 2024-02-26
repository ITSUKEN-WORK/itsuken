import React from 'react';
import './header.css';
import Button from '../base/button/Button';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="logo">
            <p1 className="LOGO">LOGO</p1>
          </div>
          <nav className="nav-bar">
            <a href="#!" className="nav-bar_element">q</a>
            <a href="#!" className="nav-bar_element">q</a>
            <a href="#!" className="nav-bar_element">q</a>
            <a href="#!" className="nav-bar_element">q</a>
            <Button variant="filled" width="sm" size="md">СВЯЗАТЬСЯ С НАМИ</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
