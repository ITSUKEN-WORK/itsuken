import React from 'react';
import './programIcons.css';

function ProgramIcons() {
  return (
    <div className="containerIcons">
      <div className="line firstLine">
        <div className="rectangle brinkPink" />
        <div className="rectangle pinkFlamingo" />
        <div className="rectangle mediumPurple " />
        <div className="rectangle cornflowerBlue" />
      </div>

      <div className="line secondLine">
        <div className="rectangle aquamarine" />
        <div className="rectangle bittersweet" />
        <div className="rectangle fog" />
        <div className="rectangle sapphire" />
      </div>
      <div className="line thierdLine">
        <div className="rectangle turquoiseBlue" />
        <div className="rectangle corn" />
        <div className="rectangle atomicTangerine" />
        <div className="rectangle feijoa" />
      </div>
    </div>
  );
}

export default ProgramIcons;
