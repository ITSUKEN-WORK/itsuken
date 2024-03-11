import React from 'react';
import AboutUs from '../../aboutUs/AboutUs';
import OurTools from '../../ourTools/OurTools';
import Services from '../../Services/Services';
import Portfolio from '../../portfolio/Portfolio';
import TextFeedBack from '../../textFeedBack/TextFeedBack';

export default function Home() {
  return (
    <div className="main">
      <AboutUs />
      <OurTools />
      <Services />
      <Portfolio />
      <TextFeedBack>
        Какой нибудь отличный тейк о том какие
        мы специалисты и воплотим все ваши мечты
      </TextFeedBack>
    </div>

  );
}
