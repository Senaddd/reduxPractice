import { createStore } from "redux";

const counterReducer = (state = { counter: 5 }, action) => {
  if (action.type === "increment") {
    return state.counter + 1;
  } else if (action.type === "decrement") {
    return state.counter - 1;
  }
};

const store = createStore(counterReducer);

store.dispatch({ type: "increment" });
