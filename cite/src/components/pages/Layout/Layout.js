import { Outlet, Link } from 'react-router-dom';
import React from 'react';

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/AboutUs">О нас</Link>
          </li>
          <li>
            <Link to="/Services">Услуги</Link>
          </li>
          <li>
            <Link to="/Portfolio">Портфолио</Link>
          </li>
          <li>
            <Link to="/Contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
