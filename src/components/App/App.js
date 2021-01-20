import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CountryContextProvider } from '../../context/GlobalState';
import useTheme from '../../customHooks/useTheme';
import Home from './Home';
import CountryDetails from '../CountryDetails/CountryDetails';

const App = () => {
  const [themeValue, setThemeValue] = useTheme();

  React.useLayoutEffect(() => {
    const $html = window.document.querySelector('html');
    $html.setAttribute('class', themeValue);
    window.localStorage.setItem('theme', JSON.stringify(themeValue));
  }, [themeValue]);

  return (
    <Router>
      <Switch>
        <>
          <Switch>
            <CountryContextProvider>
              <Route
                exact
                path={`/`}
                render={(props) => (
                  <Home
                    {...props}
                    themeValue={themeValue}
                    handleThemeChange={setThemeValue}
                  />
                )}
              />
              <Route
                path={`/:code`}
                render={(props) => (
                  <CountryDetails
                    {...props}
                    themeValue={themeValue}
                    handleThemeChange={setThemeValue}
                  />
                )}
              />
            </CountryContextProvider>
            <Route
              path={'/'}
              render={() => <div>404 page not found</div>}
            ></Route>
          </Switch>
        </>
      </Switch>
    </Router>
  );
};

export default App;
