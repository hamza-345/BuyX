import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faCoffee, faShoppingCart)




ReactDOM.render(
    <App />,
  document.getElementById('root')
);


