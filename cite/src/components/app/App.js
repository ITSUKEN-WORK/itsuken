import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterCite from '../pages/Router/RouterCite';

export default function App() {
  return (
    <BrowserRouter>
      <header><RouterCite /></header>
      <footer><RouterCite /></footer>
    </BrowserRouter>
  );
}
