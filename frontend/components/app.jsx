import React from 'react';

import Footer from './footer/footer';

import Navigation from './navigation/navigation';

import Networks from './networks/networks_container';

const App = ({ children }) => (
  <div>
    <h1>World Bikes</h1>
    <Navigation />
    <Networks />
    { children }
    <Footer />
  </div>
);

export default App;
