import "./Styles.css";
import { useCounterModel } from "../Model/CounterModel";
import { CounterIntent } from "../intent/Counterintent";
import { Switch, Typography, Box } from "@mui/material";
import undo from "./undo.png";

function CounterView() {
  const { count, autoIncrement, handleIntent } = useCounterModel();

  return (
    <div className="screen-container">
      <div className="mobile-screen">
        <h1>Counter: {count}</h1>
        <div className="main">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <button onClick={() => handleIntent(CounterIntent.INCREMENT)}>
              +
            </button>

            <button
              className="btn1"
              onClick={() => handleIntent(CounterIntent.RESET)}
            >
              <img
                style={{ color: "black" }}
                src={undo}
                alt="Reset"
                width="20"
                height="20"
              />
            </button>

            <button onClick={() => handleIntent(CounterIntent.DECREMENT)}>
              -
            </button>
          </div>
        </div>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography>Auto Increment:</Typography>
          <Switch
  checked={autoIncrement}
  onChange={() => handleIntent(CounterIntent.TOGGLE_AUTO)}
/>

        </Box>
      </div>
    </div>
  );
}

export default CounterView;
