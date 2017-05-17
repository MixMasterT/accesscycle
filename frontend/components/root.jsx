import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, history } from 'react-router-dom';

import App from './app';

import Map from './map/map_container';
import Countries from './countries/countries_container';
import Cities from './cities/cities_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <BrowserRouter>
      <App path='/'>
        <Route path='/map' component={ Map } />
        <Route path='/cities' component={ Cities }/>
        <Route path='/countries' component={ Countries }/>
      </App>
    </BrowserRouter>
  </Provider>
);

export default Root;
