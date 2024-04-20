import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  toggle,
  increaseBy,
  decreaseBy,
} from "./features/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const isCounterShown = useSelector((state) => state.counter.isCounterShown);

  const [changeValue, setChangeValue] = useState(0);

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const handleInputChange = (e) => {
    setChangeValue(parseInt(e.target.value));
    if (changeValue && changeValue !== "" && changeValue !== 0) {
      setIsBtnDisabled(false);
    } 
    else setIsBtnDisabled(true)
  };

  return (
    <div>
      <h1>Basic Counter App</h1>
      <div className="counter">
        <p
          className={`counter-value ${
            isCounterShown ? "counter-visible" : "counter-invisible"
          }`}
        >
          Counter : {counter}
        </p>
        <div className="counter-btn-containers">
          <div className="counter-btn-container">
            <button className="btn" onClick={() => dispatch(increment())}>
              Increment
            </button>
            <button className="btn" onClick={() => dispatch(decrement())}>
              Decrement
            </button>
            <button className="btn" onClick={() => dispatch(toggle())}>
              Toggle
            </button>
          </div>

          <div className="counter-btn-container">
            <label htmlFor="counter-value">
              Increase Or Decrease the Counter
            </label>
            <input
              type="number"
              id="counter-value"
              placeholder="Please write a number"
              value={changeValue}
              onChange={handleInputChange}
            />
          </div>

          <div className="counter-btn-container">
            <button
              className={isBtnDisabled ? "disabled-btn" : "btn"}
              disabled={!changeValue}
              onClick={() => dispatch(increaseBy(parseInt(changeValue)))}
            >
              Increase By
              {changeValue !== 0 && changeValue ? changeValue : " .."}
            </button>

            <button
              className={isBtnDisabled ? "disabled-btn" : "btn"}
              disabled={!changeValue}
              onClick={() => dispatch(decreaseBy(parseInt(changeValue)))}
            >
              Decrease By
              {changeValue !== 0 && changeValue ? changeValue : " .."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
