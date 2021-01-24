
import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  let [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  let timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
     <h1>{timerComponents.length ? timerComponents : <span>The goal was completed</span>}</h1> 
    </div>
  );
}
export default App;
