import { useState, useEffect } from "react";
import { CounterIntent } from "../intent/Counterintent";

export function useCounterModel() {
  const [count, setCount] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(false);

  useEffect(() => {
    let interval;
    if (autoIncrement) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [autoIncrement]);

  const handleIntent = (intent) => {
    switch (intent) {
      case CounterIntent.INCREMENT:
        setCount((prev) => prev + 1);
        break;
      case CounterIntent.DECREMENT:
        setCount((prev) => Math.max(prev - 1, 0));
        break;
      case CounterIntent.RESET:
        setCount(0);
        break;
      case CounterIntent.TOGGLE_AUTO:
        setAutoIncrement((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return { count, autoIncrement, handleIntent };
}
