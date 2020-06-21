import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CountryContextProvider, CountryContext } from "../../GlobalState";
import styles from "./App.module.css";
import CountryDetails from "../CountryDetails/CountryDetails";
import Home from "./Home";
// ADD PROPTYPES

const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <CountryContextProvider>
            <Switch>
              <Route exact path={`/`} component={Home} />
              <Route path={`/:code`} component={CountryDetails} />
              <Route
                path={"/"}
                render={() => <div>404 page not found</div>}
              ></Route>
            </Switch>
          </CountryContextProvider>
        </>
      </Switch>
    </Router>
  );
};

export default App;
