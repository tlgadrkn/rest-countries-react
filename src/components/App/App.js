import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CountryContextProvider } from '../../context/GlobalState';
import { ThemeProvider } from '../../context/ThemeState';

import Home from './Home';
import CountryDetails from '../CountryDetails/CountryDetails';
import { themeReducer } from '../../reducers/themeReducer';

// ADD PROPTYPES
// CREATE 404 NOT FOUND PAGE TO REDIRECT BACK TO HOME

const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <ThemeProvider>
            <CountryContextProvider>
              <Switch>
                <Route exact path={`/`} component={Home} />
                <Route path={`/:code`} component={CountryDetails} />
                <Route
                  path={'/'}
                  render={() => <div>404 page not found</div>}
                ></Route>
              </Switch>
            </CountryContextProvider>
          </ThemeProvider>
        </>
      </Switch>
    </Router>
  );
};

export default App;
