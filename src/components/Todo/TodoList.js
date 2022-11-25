import React from "react";
import { useDispatch, useTrackedState } from "./store";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";

const TodoList = () => {
  const state = useTrackedState();
  const dispatch = useDispatch();

  const setQuery = (event) => {
    dispatch({ type: "SET_QUERY", query: event.target.value });
  };

  return (
    <div>
      <ul>
        {state.todos.map(({ id, title, completed }) => (
          <TodoItem key={id} id={id} title={title} completed={completed} />
        ))}
        <NewTodo />
      </ul>
      <div>
        Highlight Query for incomplete items:
        <input value={state.query} onChange={setQuery} />
      </div>
    </div>
  );
};

export default TodoList;
