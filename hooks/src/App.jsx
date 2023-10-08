import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  function addValue() {
    if (counter >= 20) {
      setCounter(20);
    } else {
      setCounter(++counter);
    }
  }
  function removeValue() {
    if (counter <= 1) {
      setCounter(0);
    } else {
      setCounter(--counter);
    }
  }

  return (
    <>
      <div>
        <h1>React Hooks</h1>
      </div>
      <div>
        <h4>value:{counter}</h4>
      </div>
      <div>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
