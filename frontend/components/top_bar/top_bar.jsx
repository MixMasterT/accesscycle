import React from 'react';

const TopBar = (props) => (
  <div className='top-bar'>
    <div className='tagline'>
      <h3>Commuter bikes around the world</h3>
    </div>
    <div className='title-row'>
      <img
        id="bicycle-image"
        src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Upright_urban_bicyclist.svg'
      />
      <h1 className='title'>CycleList</h1>
    </div>
  </div>
);

export default TopBar;
