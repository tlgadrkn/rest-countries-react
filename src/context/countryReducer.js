export const countryReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_COUNTRY':
      let searchedData = localStorage.getItem('countries');
      return JSON.parse(searchedData).filter((country) => {
        return country.name.toUpperCase().includes(action.name.toUpperCase());
      });
    case 'FILTER_COUNTRY':
      if (action.region === 'All') {
        const data = window.localStorage.getItem('countries');
        return JSON.parse(data);
      }
      const data = localStorage.getItem('countries');
      return JSON.parse(data).filter((country) => {
        return country.region
          .toUpperCase()
          .includes(action.region.toUpperCase());
      });
    default:
      throw new Error(
        `Wrong action type provided to themeReducer: ${action.type}`
      );
  }
};
