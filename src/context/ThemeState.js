import React from 'react';
import { themeReducer } from '../reducers/themeReducer';

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [themeValue, dispatch] = React.useReducer(themeReducer);

  React.useLayoutEffect(() => {
    //test
    //test
    dispatch({ type: 'GET_THEME' });
  }, [themeValue]);

  return (
    <ThemeContext.Provider value={{ themeValue, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
