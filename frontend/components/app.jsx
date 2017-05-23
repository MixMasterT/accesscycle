import React from 'react';

import Footer from './footer/footer';

import Navigation from './navigation/navigation';

import Networks from './networks/networks_container';

import Map from './map/map_container';

const App = ({ children }) => (
  <div className='app'>
    <h1>World Bikes</h1>
    <Navigation />
    <main className='main'>
      { children }
      <Map />
      <Networks />
    </main>
    <Footer />
  </div>
);

export default App;
