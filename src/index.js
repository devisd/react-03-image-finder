import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import css from './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App className={css.App} />
  </React.StrictMode>
);
