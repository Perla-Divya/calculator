import React,{useEffect,useState} from "react";

const Fetchbyown=()=>{
    const [state,setState]=useState({})
    useEffect(()=>{
        fetch('https://api.rootnet.in/covid19-in/stats/history').then(res=>res.json()).then(json=>setState(json.data[1]))},[]);
    

return(
    <>
       <h1>Hello world</h1>
       {/* <p>Total is {state.summery?.total||}</p> */}
       <p>Total Cases: {state.summary?.total || 'Loading...'}</p>
       <p>{state.summary?.confirmedCasesIndian || 'Loading...'}</p>
       <p>{state.summary?.discharged}</p>

    </>
)
}
export default Fetchbyown