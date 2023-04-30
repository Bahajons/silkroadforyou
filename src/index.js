import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './utils/i18next'
const root = ReactDOM.createRoot(document.getElementById('root'));

window.$ = window.jQuery
root.render(
  <>
    <App />
  </>
);

