import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = (props) => (
  <navigation>
    <Link to='map'>Your Location</Link>
    <Link to='countries'>Countries</Link>
    <Link to='cities'>Cities</Link>
  </navigation>
);

export default Navigation;
