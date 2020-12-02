import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store/store';
import reportWebVitals from './reportWebVitals';

const app = (
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
