import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import * as ROUTES from "../../constants/routes";
import Search from "../Search";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path={ROUTES.SEARCH} component={Search} />
      </Router>
    </>
  );
};

export default App;
