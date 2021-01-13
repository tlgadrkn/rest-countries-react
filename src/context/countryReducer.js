import { getDataFromLocalStorage } from '../utils/helperFunctions';

export const countryReducer = (state, action) => {
  const { name, type, region } = action;
  switch (action.type) {
    case 'SEARCH_COUNTRY':
      if (name.trim() === '') {
        return;
      }
      try {
        return getDataFromLocalStorage().filter((country) =>
          country.name.toUpperCase().includes(name.toUpperCase())
        );
      } catch (error) {
        throw new Error(`SEARCH_COUNTRY Action Failed - ${error}`);
      }

    case 'FILTER_COUNTRY':
      if (region === 'All') {
        return getDataFromLocalStorage();
      }
      return getDataFromLocalStorage().filter((country) => {
        return country.region.toUpperCase().includes(region.toUpperCase());
      });
    default:
      throw new Error(`Wrong action type provided to countryReducer: ${type}`);
  }
};
