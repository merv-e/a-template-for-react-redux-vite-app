import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseBy10,
  increment,
  toggle,
} from "./features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const isCounterShown = useSelector((state) => state.counter.isCounterShown);
  return (
    <div>
      <h1>Basic Counter App</h1>
      <div className="counter">
        <p
          className={`counter-value ${isCounterShown ? "counter-visible" : "counter-invisible"}`}
        >
          Counter : {counter}
        </p>
        <div className="counter-btn-container">
          <button
            className="btn-container"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="btn-container"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button className="btn-container" onClick={() => dispatch(toggle())}>
            Toggle
          </button>
          <button
            className="btn-container"
            onClick={() => dispatch(increaseBy10(10))}
          >
            Increase By 10
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
