import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contacts from '../Contacts/Contacts';
import NoPage from '../No Page/NoPage';

export default function RouterCite() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
