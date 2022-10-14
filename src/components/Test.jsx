import { useEffect, useState } from "react";

function Test() {
  const [pause, setPause] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const handleStart = () => {
    const timer = setInterval(() => {
      if (pause !== true) {
        clearInterval(timer);
        return;
      }
      setSecondsLeft((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  };

  const handlePause = () => {
    setPause(!pause);
  };

  useEffect(handleStart, [pause]);

  return (
    <div>
      <span>{secondsLeft}</span>
      <button onClick={handlePause}>{pause ? "Pause" : "Start"}</button>
    </div>
  );
}

export default Test;
