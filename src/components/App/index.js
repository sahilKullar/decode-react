import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";
import * as ROUTES from "../../constants/routes";
import Search from "../Search";
import Counter from "../Counter";
import Todo from "../Todo";
import TipCalculator from "../TipCalculator";
import QuestionList from "../QuestionList";
import Fetcher from "../Fetcher";
import Scout from "../Scout";

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route exact path={ROUTES.SEARCH} element={<Search />} />
      <Route exact path={ROUTES.COUNTER} element={<Counter />} />
      <Route exact path={ROUTES.TODO} element={<Todo />} />
      <Route exact path={ROUTES.TIPCALCULATOR} element={<TipCalculator />} />
      <Route exact path={ROUTES.QUESTION} element={<QuestionList />} />
      <Route exact path={ROUTES.FETCHER} element={<Fetcher />} />
      <Route exact path={ROUTES.SCOUT} element={<Scout />} />
    </Routes>
  </>
);

export default App;
