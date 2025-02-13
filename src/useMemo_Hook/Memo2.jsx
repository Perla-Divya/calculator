import React, { useState,useMemo} from "react";
const Memo2=()=>{
    let [state1,setState1]=useState(0)
    let [state2,setState2]=useState(0)
    let test=()=>{
        return state1*2
        console.log("test function has executed")
    }
    let result= useMemo(test,[state1])
    return(
        <>
           <h1>{state1}</h1>
           <button onClick={()=>{
            setState1(state1+1)
           }}>INC state1</button>
           <h1>Double of the state1 is-{result}</h1>
           <h1>{state2}</h1>
           <button onClick={()=>{
             setState2(state2+1)
           }}>INC state2</button>

             
        </>
    )
}
export default Memo2