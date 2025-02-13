// import React, { useEffect, useState } from 'react';

// const Covidtracking= () => {
//   const [summary, setSummary] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://api.covidtracking.com/v1/states/current.json')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setSummary(data.data);  
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

  
//   if (loading) return <p>Loading...</p>;
  
//   if (error) return <p>Error: {error}</p>;
//   return (
//     <div>
//       <h1>Covid19 Tracking</h1>
//       {summary && (
//         <div>
//           {summary.map((day, index=0) => (
//             <div key={index}>
//               {/* <h3>Date: {day.day}</h3> */}
//               <p>Total Confirmed: {day.summary.positive}</p>
//               <p>Total Deaths: {day.summary.negative}</p>
//               <p>Confirmed Cases:{day.summary.state}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
    
//   );
// };

// export default Covidtracking;
import React, { useEffect , useState } from "react";


const Covidtracking =()=>{
    let [state,setState]=useState([])
   let fetchApi =()=>{
    let x=fetch('https://api.covidtracking.com/v1/states/current.json');
    console.log(x);
    x.then((res)=>{
        console.log(res);
        return res.json();
    }).then((data)=>{
        // console.log(data);
        setState(data);
    });
   }

    useEffect (()=>{
        fetchApi();
    },[])
    return(
   <div>
    <table border={3}>
        <thead>
        <tr>
            <td>positive</td>
            <td>negative</td>
            <td>state</td>
        </tr>
     
        </thead>
        <tbody>
        {state.map((ele)=>{
          return(
            <tr>
            <td>{ele.positive}</td>
            <td>{ele.negative}</td>
            <td>{ele.state}</td>
           </tr>
          )
        })}
        
         </tbody> 
        
   
    </table>

   </div>
    )
       
}
export default Covidtracking