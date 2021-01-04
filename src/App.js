
import React, {useState , useEffect} from 'react' 
import logo from './logo.svg';
import Carde from './Carde'
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];

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
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
const [year] = useState(new Date().getFullYear());
  return (
    <Carde/>
  );
}

export default App;
