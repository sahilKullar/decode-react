import React, { useEffect } from "react";
import List from "./List";
import Search from "./Search";
import { useSemiPersistentState } from "./CustomeState";

export default function Scout() {
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

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "react");

  // const [searchTerm, setSearchTerm] = useState(
  //   localStorage.getItem("search") || "React"
  // );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <p>Searching for {searchTerm}</p>
      <hr />
      <List list={searchedStories} />
    </div>
  );
}
