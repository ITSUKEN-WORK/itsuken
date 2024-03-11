import React from 'react';
import AboutUs from '../../aboutUs/AboutUs';
import OurTools from '../../ourTools/OurTools';
import Services from '../../Services/Services';
import Portfolio from '../../portfolio/Portfolio';

export default function Home() {
  return (
    <div className="main">
      <AboutUs />
      <OurTools />
      <Services />
      <Portfolio />
    </div>

  );
}
