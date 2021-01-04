import React from 'react'

function Carde(){
    const calculateTimeLeft = () => { 
        let year = new Date().getFullYear();
         let difference = +new Date(`10/01/${year}`) - +new Date();
          let timeLeft = {};
           if (difference > 0) { timeLeft = { days: Math.floor(difference / (1000 * 60 * 60 * 24)),
             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
               seconds: Math.floor((difference / 1000) % 60) }; }
             }
    return(
        <div>
            {timeLeft}
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        <p>date = {year}</p>
     </div> 
    );
}
export default Carde;