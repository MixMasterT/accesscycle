import React from 'react';

import Footer from './footer/footer';

import Navigation from './navigation/navigation';

const App = ({ children }) => (
  <div>
    <h1>World Bikes</h1>
    <Navigation />
    { children }
    <Footer />
  </div>
);

export default App;
