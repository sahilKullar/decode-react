import React, { useEffect, useReducer, useState } from "react";

function reducer(state, { type, responseJSON, error }) {
  switch (type) {
    case "loading":
      return { ...state, isLoading: true };
    case "success":
      return { responseJSON, isLoading: false, error: null };
    case "error":
      return { error, isLoading: false, responseJSON: null };
    default:
      throw new Error("Unknown action type");
  }
}

function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, {
    responseJSON: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let shouldCancel = false;

    const callFetch = async () => {
      dispatch({ type: "loading" });

      try {
        const response = await fetch(url);
        const newResponseJSON = await response.json();
        if (shouldCancel) return;
        dispatch({
          type: "success",
          responseJSON: newResponseJSON,
        });
      } catch (e) {
        if (shouldCancel) return;
        dispatch({ type: "error", error: e.message });
      }
    };
    callFetch();
    // eslint-disable-next-line no-return-assign
    return () => (shouldCancel = true);
  }, [url]);
  return state;
}

export default function Fetcher() {
  const [url, setUrl] = useState("");
  const { responseJSON, isLoading, error } = useFetch(url);
  return (
    <div>
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
      {/* eslint-disable-next-line no-nested-ternary */}
      {error ? (
        <p>Error: {error}</p>
      ) : isLoading ? (
        <p>Loading: {isLoading}</p>
      ) : (
        <p>Response: {responseJSON}</p>
      )}
    </div>
  );
}
