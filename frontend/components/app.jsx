import React from 'react';

import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <h1>World Bikes</h1>
    { children }
    <Footer />
  </div>
);

export default App;
