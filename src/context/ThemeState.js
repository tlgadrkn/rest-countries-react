import React from 'react';
import { themeReducer } from '../reducers/themeReducer';

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [themeValue, dispatch] = React.useReducer(themeReducer);
  // const [prevState, setPrevState] = React.useState(null);

  React.useEffect(() => {
    dispatch({ type: 'GET_THEME' });
  }, [themeValue]);

  return (
    <ThemeContext.Provider value={{ themeValue, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
