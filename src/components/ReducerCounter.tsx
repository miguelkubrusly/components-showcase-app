import React, { useReducer } from "react";
import Panel from "./Panel";
import Button from "./Button";

const INCREMENT_ONE = "increment-one-to-count";
const DECREMENT_ONE = "decrement-one-to-count";
const SET_ADD_VALUE = "captures-input-as-value-to-add";
const ADD_A_LOT = "add-a-lot-to-count";

const reducer: React.Reducer<ReducerCounterState, ReducerCounterAction> = (
  state: ReducerCounterState,
  action: ReducerCounterAction
) => {
  switch (action.type) {
    case INCREMENT_ONE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_ONE:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_ADD_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_A_LOT:
      return {
        ...state,
        count: state.count + state.valueToAdd!,
        valueToAdd: 0,
      };
    default:
      console.log(action.type);
      return state;
  }
};
function ReducerCounter() {
  const [state, dispatch] = useReducer<
    React.Reducer<ReducerCounterState, ReducerCounterAction>
  >(reducer, {
    count: 10,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT_ONE });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT_ONE });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10) || 0;
    dispatch({
      type: SET_ADD_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: ADD_A_LOT });
  };

  const inputValue = Number.isNaN(state.valueToAdd) ? "" : state.valueToAdd;

  return (
    <Panel className="max-w-sm p-4">
      <div className="text-2xl font-bold mb-4 text-center">{state.count}</div>
      <div className="flex justify-center space-x-4 mb-4">
        <Button success outline onClick={increment}>
          Increment
        </Button>
        <Button danger outline onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="valueToAdd" className="mb-2">
          Add a lot
        </label>
        <input
          type="text"
          id="value ToAdd"
          className="p-1 mb-4 bg-gray-50 border border-gray-300 text-center"
          value={inputValue}
          onChange={handleChange}
        />
        <Button outline type="submit">
          Add it!
        </Button>
      </form>
    </Panel>
  );
}

export default ReducerCounter;
