import React from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter, Route, history } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
