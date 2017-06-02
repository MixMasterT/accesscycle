import React from 'react';

const Station = ({ station }) => {
  console.log(station);
  if (Object.keys(station).length === 0) {
    return (
      <h2>No Station Selected</h2>
    )
  } else {
    return (
      <div className='station'>
        <h2>Station: {station.name}</h2>
        <table>
          <thead>
            <tr>
              <th>{station.address}</th>
            </tr>

            <tr>
              <th>bikes available</th><th>free slots</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{station.free_bikes}</td><td>{station.empty_slots}</td>
            </tr>
          </tbody>
        </table>

      </div>
    );

  }

}


export default Station;
