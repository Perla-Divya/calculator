import React from "react";
import { useState } from "react";

const State2=()=>{
    let [state,setState]=useState(0);
    let Increment=()=>{
        setState(state+1)
    }
    let decrement=()=>{
        setState(state-1)
    }
  return(
    <div>
          <h1>{state}</h1>
          <button onClick={Increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
    </div>
  )  
}
export default State2