import React from 'react';

import Footer from './footer/footer';

import Navigation from './navigation/navigation';

import Networks from './networks/networks_container';

import Map from './map/map_container';

const App = ({ children }) => (
  <div>
    <h1>World Bikes</h1>
    <Navigation />
    { children }
    <Map />
    <Networks />

    <Footer />
  </div>
);

export default App;
