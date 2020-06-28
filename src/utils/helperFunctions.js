function getDataFromLocalStorage(key = "countries") {
  let data = localStorage.getItem(key);
  return JSON.parse(data);
}

export const getSpecificCountryFromLocalStorage = (key, filter) => {
  return getDataFromLocalStorage(key).filter(
    (data) => data.alpha3Code === filter
  );
};

export function getBorderCountryName(countryBorders) {
  let allCountries = getDataFromLocalStorage();
  let filteredCountryNames = [];
  for (let countryCode of countryBorders) {
    for (let country of allCountries) {
      if (countryCode === country.alpha3Code) {
        filteredCountryNames.push(country.name);
      }
    }
  }
  return filteredCountryNames;
}