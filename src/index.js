import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const app = (
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
