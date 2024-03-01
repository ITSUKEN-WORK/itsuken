import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import FormFeedBack from './components/formFeedBack/FormFeedBack';
import Portfolio from './components/portfolio/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FormFeedBack />
    <Portfolio />
  </React.StrictMode>,
);
