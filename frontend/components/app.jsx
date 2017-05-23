import React from 'react';

import Footer from './footer/footer';

import Main from './main/main';

import Map from './map/map_container';
import Countries from './countries/countries_container';
import Cities from './cities/cities_container';

import Navigation from './navigation/navigation';

import Networks from './networks/networks_container';

const App = ({ children }) => (
  <div className='app'>
    <h1>CycleList</h1>

    <Main />

    <Footer />
  </div>
);

export default App;
