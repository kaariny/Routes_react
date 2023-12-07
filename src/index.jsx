// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter'; // Importando o componente AppRouter
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
