export function getDataFromLocalStorage(key = 'countries') {
  let data = localStorage.getItem(key);
  return JSON.parse(data);
}

export const getSpecificCountryFromLocalStorage = (key, filter) => {
  const data = getDataFromLocalStorage(key).filter(
    (data) => data.alpha3Code === filter
  );
  return data;
};

export function getFilteredBorderCountries(countryBorders) {
  let allCountries = getDataFromLocalStorage();
  let filteredCountryNames = [];
  for (let countryCode of countryBorders) {
    for (let country of allCountries) {
      if (countryCode === country.alpha3Code) {
        filteredCountryNames.push({
          countryName: country.name,
          countryCode: country.alpha3Code,
        });
      }
    }
  }
  return filteredCountryNames;
}
