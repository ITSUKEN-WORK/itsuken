import React from 'react';
import './ourTools.css';
import ProgramIcons from '../programIcons/ProgramIcons';
import Card from '../card/Card';

function OurTools() {
  return (
    <div className="our__tools">
      <div className="our__tools-container">
        <ProgramIcons />
        <Card />
      </div>
    </div>
  );
}

export default OurTools;
