import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/AboutUs/AboutUs';
import Services from '../pages/Services/Services';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contacts from '../pages/Contacts/Contacts';
import NoPage from '../pages/No Page/NoPage';
import Home from '../pages/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <footer />
    </BrowserRouter>
  );
}
