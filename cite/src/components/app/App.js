import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layot from '../pages/Layout/Layout';
import AboutUs from '../pages/AboutUs/AboutUs';
import Services from '../pages/Services/Services';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contacts from '../pages/Contacts/Contacts';
import Home from '../pages/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <header>123</header>
      <Routes>
        <Route path="/" element={<Layot />}>
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<>404 not found123</>} />
        </Route>
      </Routes>
      <footer />
    </BrowserRouter>
  );
}
