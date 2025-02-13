import React,{useRef,useState} from "react";

const Ref1=()=>{
    let [state,setState]=useState(0);
    let num=0;
    let x=useRef(0);
    console.log(x);

    let incState=()=>{
        setState(state+1);
        console.log("State value is:"+state);
    }
    let incNum=()=>{
        num+=1;
        console.log("num value is"+num)
    }
    let incRef=()=>{
        x.current+=1;
        console.log("ref value is "+x.current)
    }
    return(
        <div>
            <h1>num-{num}</h1>
            <button onClick={incNum}>IncreNum</button>
            <h1>useState-{state}</h1>
            <button onClick={incState}>IncreState</button>
            <h1>using useRef-{x.current}</h1>
            <button onClick={incRef}>IncreRef</button>
        </div>
    )
}
export default Ref1