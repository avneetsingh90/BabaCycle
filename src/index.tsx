import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './core/store/store';
import 'moment/min/locales';
ReactDOM.render(
  <Provider store={store}>
    <Router>
       <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
