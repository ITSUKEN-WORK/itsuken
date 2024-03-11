import React, { useState } from 'react';
import './formFeedBack.css';
import Button from '../base/button/Button';
import ContactButtons from '../contactButtons/ContactButtons';
import ServerApi from '../../service/ServerApi';

function FormFeedBack() {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <form className="formFeedBack forma">
      <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Имя" className="textBox" />
      <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" placeholder="E-mail" className="textBox" />
      <input value={message} onChange={(event) => setMessage(event.target.value)} type="text" placeholder="Номер телефона" className="textBox" />
      <div className="feedbackButtons">
        <Button variant="filled" size="md" width="md"
          onClick={() => {
            ServerApi.sendFeedback({
              name: name,
              email: email,
              message: message
            })
          }}>
          Отправить заявку
        </Button>
        <ContactButtons />
      </div>
    </form>
  );
}

export default FormFeedBack;
