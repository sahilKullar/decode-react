import React from "react";
import axios from "axios";
import List from "./List";
// import InputWithLabel from "./components/InputWithLabel";
import SearchForm from "./SearchForm";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";
// const initialStories = [
//   {
//     title: "React",
//     url: "https://reactjs.org/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: "Redux",
//     url: "https://redux.js.org/",
//     author: "Dan Abramov, Andrew Clark",
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

const useSemiPersistentState = function (key, initialState) {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

// const getAsyncStories = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject({ data: { stories: initialStories } });
//     }, 2000);
//   });
// };

const storiesReducer = (state, action) => {
  switch (action.type) {
    case "STORIES_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
      };
    case "STORIES_FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case "STORIES_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    case "REMOVE_STORY":
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

export default function Search() {
  // const [searchTerm, setSearchTerm] = React.useState("react");
  // const [searchTerm, setSearchTerm] = React.useState(
  //   localStorage.getItem("search") || "react"
  // );
  //
  // React.useEffect(() => {
  //   console.log(localStorage.getItem("search"));
  //   localStorage.setItem("search", searchTerm);
  // }, [searchTerm]);

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");

  // const [stories, setStories] = React.useState([]);
  const [stories, dispatchStories] = React.useReducer(storiesReducer, {
    data: [],
    isError: false,
    isLoading: false,
  });

  const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  // const [isLoading, setIsLoading] = React.useState(null);
  // const [isError, setIsError] = React.useState(null);

  // React.useEffect(() => {
  //   dispatchStories({ type: "STORIES_FETCH_INIT" });
  //   getAsyncStories()
  //     .then((result) => {
  //       // setStories(result.data.stories);
  //       dispatchStories({
  //         type: "STORIES_FETCH_SUCCESS",
  //         payload: result.data.stories,
  //       });
  //     })
  //     .catch((error) => {
  //       dispatchStories({
  //         type: "STORIES_FETCH_FAILURE",
  //       });
  //     });
  // }, []);

  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: "STORIES_FETCH_INIT" });
    try {
      const result = await axios.get(url);
      // .then((result) =>
      dispatchStories({
        type: "STORIES_FETCH_SUCCESS",
        payload: result.data.hits,
      });
    } catch (error) {
      dispatchStories({ type: "STORIES_FETCH_FAILURE" });
    }
  }, [url]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteItem = (item) => {
    // setStories(stories.filter((story) => item.objectID !== story.objectID));

    dispatchStories({
      type: "REMOVE_STORY",
      payload: item,
    });
  };

  const searchedStories = stories.data.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    event.preventDefault();
  };

  return (
    <div className="ui raised very padded text container segment container">
      <h2 className="ui header headline-primary">My Hacker Stories</h2>
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />
      <hr />
      {stories.isError && <p>Something went wrong..</p>}
      {stories.isLoading ? (
        <p>Loading..</p>
      ) : (
        <List list={searchedStories} onDelete={deleteItem} />
      )}
    </div>
  );
}
