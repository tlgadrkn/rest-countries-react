export const getSpecificCountryFromLocalStorage = (key, filter) => {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);
  return data.filter((data) => data.alpha3Code === filter);
};
