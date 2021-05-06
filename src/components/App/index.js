import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import * as ROUTES from "../../constants/routes";
import Search from "../Search";
import Counter from "../counter";
import Todo from "../todo";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path={ROUTES.SEARCH} component={Search} />
        <Route exact path={ROUTES.COUNTER} component={Counter} />
        <Route exact path={ROUTES.TODO} component={Todo} />
      </Router>
    </>
  );
};

export default App;
