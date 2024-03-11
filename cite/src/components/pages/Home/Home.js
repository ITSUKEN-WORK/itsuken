import React from 'react';
import AboutUs from '../../aboutUs/AboutUs';
import OurTools from '../../ourTools/OurTools';
import Services from '../../Services/Services';
import Portfolio from '../../portfolio/Portfolio';
import FeedBack from '../../feedBack/FeedBack';

export default function Home() {
  return (
    <div className="main">
      <AboutUs />
      <OurTools />
      <Services />
      <Portfolio />
      <FeedBack />
    </div>

  );
}
