import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CountryContextProvider } from '../../context/GlobalState';
import useTheme from '../../customHooks/useTheme';
import Home from './Home';

const CountryDetails = React.lazy(() =>
  import('../CountryDetails/CountryDetails')
);

const App = () => {
  const [themeValue, setThemeValue] = useTheme();

  React.useLayoutEffect(() => {
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
              <React.Suspense fallback={<h1>loading countryDetails</h1>}>
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
              </React.Suspense>
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
