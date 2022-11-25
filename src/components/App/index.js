import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";
import * as ROUTES from "../../constants/routes";
import Search from "../Search";
import Counter from "../Counter";
import Todo from "../Todo";

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route exact path={ROUTES.SEARCH} element={<Search />} />
      <Route exact path={ROUTES.COUNTER} element={<Counter />} />
      <Route exact path={ROUTES.TODO} element={<Todo />} />
    </Routes>
  </>
);

export default App;
