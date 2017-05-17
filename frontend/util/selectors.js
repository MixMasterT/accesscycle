export const citiesFromNetworks = (networksArr) => {
  const cities = new Set();
  networksArr.forEach((network) => {
    if (network.location) {
      if (network.location.city) {
        if (!cities.has(network.location.city)) {
          cities.add(network.location.city);
        }
      }
    }
  })
  let orderedCities = [...cities].sort();
  return orderedCities;
}

export const countriesFromNetworks = (networksArr) => {
  const countries = new Set();
  networksArr.forEach((network) => {
    if (network.location) {
      if (network.location.city) {
        if (!cities.has(network.location.city)) {
          cities.add(network.location.city);
        }
      }
    }
  })
}
