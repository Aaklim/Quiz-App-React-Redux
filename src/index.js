import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.scss'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import store from './Redux/store/store'

const app = (
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
