const countryNameMap = require('./country_abbrev_map.json');

// gives array of city name strings
export const citiesFromNetworks = (networksArr) => {
  const cities = new Set();
  networksArr.forEach((network) => {
    if (network.location) {
      if (network.location.city) {
        // if (!cities.has(`${network.location.city}, ${
        //     countryNameMap[network.location.country]
        //   }`)) {
        if (network.location && network.location.country) {
          cities.add(`${network.location.city},${countryNameMap[network.location.country]}`);
        }
      }
    }
  });
  let orderedCities = [...cities].sort();
  return orderedCities;
};

// gives array of country name strings
export const countriesFromNetworks = (networksArr) => {
  const countries = new Set();
  networksArr.forEach((network) => {
    if (network.location) {
      if (network.location.country) {
        if (!countries.has(network.location.country)) {
          countries.add(network.location.country);
        }
      }
    }
  });
  const countriesArr = [...countries].map((country) => countryNameMap[country]);
  countriesArr.sort();
  return countriesArr;
};

// gives array of network objects in the given city
export const networksByCity = (city, networksArr) => {
  return networksArr.filter((network) => network.location.city == city );
};

// gives array of network objects in the given country
export const networksByCountry = (country, networksArr) => {
  let countryCode = "";
  Object.keys(countryNameMap).forEach((k) => {
    if (countryNameMap[k] === country) {
      countryCode = k;
    }
  });
  return networksArr.filter((network) => {
    return network.location && network.location.country === countryCode
  });
};

// gives array of network objects in the rectangular latlng bounds
export const networksInBounds = (bounds, networksArr) => {

};
