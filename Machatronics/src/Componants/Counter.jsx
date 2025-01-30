import { useEffect, useState } from "react";
import "./style.css";
function Counter() {
  const [count, setCount] = useState(0);
  const [autoi, setAuto] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const toggleauto = () => {
    setIsOn(!isOn);
    setAuto((prev) => !prev);
  };

  useEffect(() => {
    let iid;
    if (autoi) {
        iid = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(iid);
  }, [autoi]);

  const increment = () => setCount((prev) => Math.min(prev + 1));
  const decrement = () => setCount((prev) => Math.max(prev - 1, 0));
  const reset = () => setCount(0);

  return (
    <div className="screen-container">
      <div className="mobile-screen">
        <h1>Counter: {count}</h1>
        <div
          className="main"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <button onClick={increment}>+</button>
          <button className="btn1" onClick={reset}>
            <svg
              style={{ paddingTop: "10px" }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15A9 9 0 1 1 23 10" />
            </svg>
          </button>
          <button onClick={decrement}>-</button>
        </div>
        <button
          onClick={toggleauto}
          style={{
            backgroundColor: isOn ? "green" : "red",
            color: "white",
            border: "none",
            borderRadius: "25px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isOn ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
}

export default Counter;
