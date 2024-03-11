import React from 'react';
import './feedBack.css';
import TextFeedBack from '../textFeedBack/TextFeedBack';
import FormFeedBack from '../formFeedBack/FormFeedBack';

function FeedBack() {
  return (
    <div className="feedback">
      <TextFeedBack>
        Какой нибудь отличный тейк о том какие
        мы специалисты и воплотим все ваши мечты
      </TextFeedBack>
      <FormFeedBack />
    </div>
  );
}

export default FeedBack;
