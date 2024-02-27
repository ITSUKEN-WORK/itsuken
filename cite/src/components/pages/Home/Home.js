import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/aboutUs">О нас</Link>
        </li>
        <li>
          <Link to="/services">Услуги</Link>
        </li>
        <li>
          <Link to="/portfolio">Портфолио</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}
