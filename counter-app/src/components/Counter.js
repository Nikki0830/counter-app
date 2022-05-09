// import React from "react";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [btn, setBtn] = useState("Enable dark mode");
  // const [mode, setMode] = useState("light");
  const [mystyle, setMystyle] = useState({
    color: "#042743",
    backgroundColor: "white",
  });
  //   setBtn("Enable light mode");
  const toggleMode = () => {
    if (mystyle.color === "#042743") {
      setMystyle({
        color: "white",
        backgroundColor: "#042743",
      });
      setBtn("Enable light mode");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMystyle({
        color: "#042743",
        backgroundColor: "white",
      });
      setBtn("Enable dark mode");
      document.body.style.backgroundColor = "white";
      // setMode("light");
      // document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div>
      <div className="container my-5" style={mystyle}>
        <div className="form-check form-switch" style={mystyle}>
          <input
            onChange={toggleMode}
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            {btn}
          </label>
        </div>

        <div className="card text-center my-5"
        style = {mystyle}>
          <div className="card-body">
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button
              className="btn btn-success mx-3"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="btn btn-primary mx-3"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              Decrement
            </button>
            <button
              className="btn btn-warning mx-3"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
