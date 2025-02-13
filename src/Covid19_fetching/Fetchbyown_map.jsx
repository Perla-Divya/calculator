// import React,{useState,useEffect} from "react";

// const Fetchnyown_map=()=>{
//     const [state,setState]=useState([]),
//     useEffect(() => {
//         fetch('https://api.rootnet.in/covid19-in/stats/history')
//           .then(res => res.json())              
//           .then(json => setState(json.data));   
//       }, []);  
//     return(
//         <>
//            <p>{state}</p>
//            state.map((ele)=>{
//             <div>
//                 <p>Total Cases: {state.summary?.total || 'Loading...'}</p>
                  
//             </div>

            
//            })
//         </>
//     )
// }
import React, { useState, useEffect } from "react";

const FetchbyownMap = () => {
  const [state, setState] = useState([]);  // Initialize state as an array to map over multiple elements

  useEffect(() => {
    fetch('https://api.rootnet.in/covid19-in/stats/history')
      .then(res => res.json())              // Call the json() method
      .then(json => setState(json.data));   // Set the entire data array to state
  }, []);  // Empty dependency array to fetch data only once when the component mounts

  return (
    <>
      {state.length === 0 ? (                    // Conditional check to handle empty state
        <p>Loading...</p>
      ) : (
        state.map((ele, index) => (              // Map through each element in the state array
          <div key={index}>
            <p>Total Cases: {ele.summary.total}</p>  
            <p>total :{ele.summary.confirmedCasesIndian}</p> {/* Access 'summary.total' from each element */}
          </div>
        ))
      )}
    </>
  );
};

export default FetchbyownMap;
