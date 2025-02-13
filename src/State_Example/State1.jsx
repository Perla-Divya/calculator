import React from 'react'

const State1=()=>{
    let num=0
    let handleClick=()=>{
        num++;
        console.log(num);
    }
  return(
        <div>
              <h1>{num}</h1>
              <button onClick={handleClick}>Increment</button>
        </div>
  )
}
export default State1
