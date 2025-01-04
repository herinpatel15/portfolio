// "use client"
// import React from 'react'
// import CountUp from 'react-countup';
// import VisibilitySensor from 'react-visibility-sensor';

// function CounterYear() {
//   return (
//     <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
//         {({ isVisible }: {isVisible: boolean}) => (
//             <span>
//                 {isVisible ? <CountUp end={1000} /> : null}
//             </span>
//         )}
//       </VisibilitySensor>
//   )
// }

// export default CounterYear


"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CounterYear() {
  const [startCount, setStartCount] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          setStartCount(true);
        }
      }}
      partialVisibility
      offset={{ bottom: 200 }}
    >
      {() => (
        <span>
          {startCount ? <CountUp start={0} end={1000} duration={3} /> : null}
        </span>
      )}
    </VisibilitySensor>
  );
}

export default CounterYear;
