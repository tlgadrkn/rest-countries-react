import React from 'react';
import { themeReducer } from '../reducers/themeReducer';
import { useMatchMedia } from '../customHooks/customHooks';

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [themeValue, dispatch] = React.useReducer(
    themeReducer,
    useMatchMedia('(prefers-color-scheme: dark)')?.matches
      ? { themeValue: 'dark', userTriggered: false }
      : { themeValue: 'default', userTriggered: false }
  );

  const matches = useMatchMedia('(prefers-color-scheme: dark)');

  React.useLayoutEffect(() => {
    if (matches && !themeValue?.userTriggered) {
      dispatch({ type: 'SET_THEME', themeValue: 'dark', userTriggered: false });
    }
    dispatch({
      type: 'SET_THEME',
      themeValue: themeValue.themeValue,
      userTriggered: false,
    });
  }, [themeValue, matches]);

  return (
    <ThemeContext.Provider value={{ themeValue, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
