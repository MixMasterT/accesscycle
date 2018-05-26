export const fetchNetworks = () => {
  console.log('fetchNetworks called...');
  return (
    $.ajax({
      method: 'GET',
      url: 'http://api.citybik.es/v2/networks',
    })
  );
}


export const fetchNetwork = networkId => (
  $.ajax({
    method: 'GET',
    url: `http://api.citybik.es/v2/networks/${networkId}`,
  })
);
