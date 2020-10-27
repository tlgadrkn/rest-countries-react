import { getDataFromLocalStorage } from '../utils/helperFunctions';

export const countryReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_COUNTRY':
      return getDataFromLocalStorage().filter((country) =>
        country.name.toUpperCase().includes(action.name.toUpperCase())
      );

    case 'FILTER_COUNTRY':
      if (action.region === 'All') {
        return getDataFromLocalStorage();
      }
      return getDataFromLocalStorage().filter((country) => {
        return country.region
          .toUpperCase()
          .includes(action.region.toUpperCase());
      });
    default:
      throw new Error(
        `Wrong action type provided to countryReducer: ${action.type}`
      );
  }
};
