import React from "react";

const list = [
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
      <label htmlFor="search">
        Search:
        <input type="text" id="search" />
      </label>
      <hr />
      {list.map((item) => (
        <div key={item.objectID}>
          <List item={item} />
        </div>
      ))}
    </div>
  );
}

// eslint-disable-next-line camelcase
function List(props) {
  // eslint-disable-next-line react/destructuring-assignment,camelcase
  const { url, author, num_comments, points } = props.item;
  return (
    <>
      <span>{url}</span>
      <span>{author}</span>
      {/* eslint-disable-next-line camelcase */}
      <span>{num_comments}</span>
      <span>{points}</span>
    </>
  );
}
