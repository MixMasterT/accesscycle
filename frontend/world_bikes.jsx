import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import styles from './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('react-root');
  const store = configureStore(); // add preloaded state as arg if needed

  ReactDOM.render(<Root store={ store } />, root);
});
