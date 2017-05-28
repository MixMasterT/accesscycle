import React from 'react';

import Footer from './footer/footer';

import Main from './main/main_container';

import Map from './map/map_container';
import Countries from './countries/countries_container';
import Cities from './cities/cities_container';

import TopBar from './top_bar/top_bar';

import Networks from './networks/networks_container';

const App = () => (
  <div className='app'>
    <TopBar />
    <Main />
    <Footer />
  </div>
);

export default App;
