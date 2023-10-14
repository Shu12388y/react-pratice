import { useState } from "react";
import "./app.css";

function App() {
  let [bg, setBg] = useState("green");
  let [text, setText] = useState("");
  function green() {
    setBg("green");
    setText("txt-green");
  }
  function Purple() {
    setBg("purple");
    setText("txt-purple");
  }
  function red() {
    setBg("red");
    setText("txt.red");
  }

  function Black() {
    setBg("black");
    setText("txt-black");
  }
  function Orange() {
    setBg("orange");
    setText("txt-orange");
  }

  return (
    <>
      <div className={bg}></div>
      <div className="cl_butt">
        <button className={text} onClick={green}>
          Green
        </button>
        <button className={text} onClick={Purple}>
          Purple
        </button>
        <button className={text} onClick={red}>
          Red
        </button>
        <button className={text} onClick={Black}>
          Black
        </button>
        <button className={text} onClick={Orange}>
          Orange
        </button>
      </div>
    </>
  );
}

export default App;
