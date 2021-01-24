// import React, { useEffect, useState } from "react";

// function Carde(){
    
//     const calculateTimeLeft = () => {
// let year = new Date().getFullYear();

// let difference = +new Date(`10/01/${year}`) - +new Date();
// let timeLeft = {srt};
// function srt() {
//     if (difference > 0) {
//         timeLeft = {
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60)
//       };
//     }
//     else{
//         return timeLeft;
//     } 
// }
// useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearTimeout(timer);

    

//   });
  
//   const timerComponents = [];

// Object.keys(timeLeft).forEach((interval) => {
//   if (!timeLeft[interval]) {
//     return;
//   }

//   timerComponents.push(
//     <span>
//       {timeLeft[interval]} {interval}{" "}
//     </span>
//   );
// });

//   [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   [year] = useState(new Date().getFullYear());

// }
// return(
//     <div>
//      <p>{year}</p>
//     {timerComponents.length ? timerComponents : <span>Time's up!</span>}
//  </div> 
// );

// }
// export default Carde;