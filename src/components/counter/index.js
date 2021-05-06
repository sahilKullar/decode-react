import React, {
  // createContext,
  // useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

import { createContainer } from "react-tracked";

const initialState = {
  count1: 0,
  count2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        [action.name]: state[action.name] + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        [action.name]: state[action.name] - 1,
      };

    default:
      return state;
  }
};

// const useValue = () => useState(initialState);
const useValue = () => useReducer(reducer, initialState);

// const CounterContext = createContext(null);

// const useGlobalState = () => {
//   const value = useContext(CounterContext);
//   if (value === null) throw new Error("Please add GlobalStateProvider");
//   return value;
// };
//
// const GlobalStateProvider = ({ children }) => {
//   return (
//     <CounterContext.Provider value={useValue()}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

const useFlasher = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.classList.add("flash");
    setTimeout(() => {
      ref.current.classList.remove("flash");
    }, 300);
  });
  return ref;
};

const {
  useTracked: useGlobalState,
  Provider: GlobalStateProvider,
} = createContainer(useValue);

const Counter = ({ name }) => {
  // const [state, setState] = useGlobalState();
  const [state, dispatch] = useGlobalState();
  // const count = state[name] || 0;

  const doIncrement = () => {
    // setState({ ...state, [name]: count + 1 });
    dispatch({ type: "INCREMENT", name });
  };

  const doDecrement = () => {
    // setState({ ...state, [name]: count - 1 });
    dispatch({ type: "DECREMENT", name });
  };

  return (
    <div ref={useFlasher()}>
      <label>{state[name]} </label>
      <button style={{ marginLeft: "5px" }} onClick={doIncrement}>
        +1
      </button>
      <button style={{ marginLeft: "5px" }} onClick={doDecrement}>
        -1
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="ui raised very padded text container segment container">
      <GlobalStateProvider>
        <h1 className="ui header headline-primary">Count1</h1>
        <Counter name="count1" />
        <Counter name="count1" />
        <h1 className="ui header headline-primary">Count2</h1>
        <Counter name="count2" />
        <Counter name="count2" />
      </GlobalStateProvider>
    </div>
  );
};

export default App;
