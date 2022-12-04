import React from "react";
import List from "./List";
import Search from "./Search";

const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

export default function Scout() {
  return (
    <div>
      <Search />
      <hr />
      <List list={stories} />
    </div>
  );
}
