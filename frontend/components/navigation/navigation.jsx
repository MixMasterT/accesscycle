import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = (props) => (
  <navigation>
    <Link to='countries'>Countries</Link>
    <Link to='cities'>Cities</Link>
    <Link to='map'>Current Location</Link>
  </navigation>
);

export default Navigation;
