import React from 'react';
import './formFeedBack.css';
import Button from '../base/button/Button';
import ContactButtons from '../contactButtons/ContactButtons';

function FormFeedBack() {
  return (
    <form className="formFeedBack forma">
      <input type="text" placeholder="Имя" className="textBox" />
      <input type="text" placeholder="E-mail" className="textBox" />
      <input type="text" placeholder="Номер телефона" className="textBox" />
      <div className="feedbackButtons">
        <Button variant="filled" size="md" width="md">Отправить заявку</Button>
        <ContactButtons />
      </div>
    </form>
  );
}

export default FormFeedBack;
