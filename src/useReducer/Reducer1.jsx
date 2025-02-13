import React, { useReducer } from "react";


const Reducer1=()=>{
    let reducer=(state,action)=>{
        if(action.type=="inc"){
            return state+1
        }
        else if(action.type=="dec")
        {
            return state-1
        }
        else if(action.type=="double")
            {
                return state+2
            }
        else if(action.type=="multiply")
            {
                return state*2
            }    
    }
    let [state,dispatch]=useReducer(reducer,0)
    return(
        <>
           <h1>{state}</h1>
           <button onClick={()=>{
            dispatch({type:"inc"})
           }}>Inc</button>
           <button onClick={()=>{
            dispatch({type:"dec"})
           }}>Dec</button>
           <button onClick={()=>{
            dispatch({type:"double"})
           }}>Double</button>
           <button onClick={()=>{
            dispatch({type:"multiply"})
           }}>Multiply</button>
        </>
    )
}
export default Reducer1