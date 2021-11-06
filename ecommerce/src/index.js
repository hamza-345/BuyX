import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./bootstrap.min.css"
import { Provider } from 'react-redux';
import store from './store'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faUser, faStar, faStarHalfAlt, faTrash  } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

library.add(faUser, faStar, farFaStar, faStarHalfAlt, faShoppingCart, faTrash)




ReactDOM.render(
  <Provider store = {store}>
    <App /> </Provider>,
  document.getElementById('root')
  
);


