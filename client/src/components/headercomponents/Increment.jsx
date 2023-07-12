import { useEffect, useReducer } from "react";

const Increment = ({ heading, ages, onChange }) => {
  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  const initialState = { val: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          val: state.val + 1
        };

      case "decrement":
        return {
          val: state.val - 1
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    onChange(state.val);
  }, [state.val, onChange]);

  return (
    <div>
      <div className="button-parent flow-2">
        <p>{heading}</p>
        <p>{ages}</p>
        <div className="flex">
          <button onClick={handleDecrement}>-</button>
          <p>{state.val}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Increment;
