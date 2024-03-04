import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import Services from './components/Services/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Services />
  </React.StrictMode>,
);
