import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';

const APP_API_URL = 'https://js-band-api.glitch.me/';
axios.defaults.baseURL = APP_API_URL;

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
