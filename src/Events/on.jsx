import React, { useState } from "react";
const On = ()=>{
    let[state,setState] = useState(true);
    let handleClick =()=>{
       setState(!state)
    }
     

    return(
      <>
          <button onClick={handleClick} >{state?"On":"Off"}</button>
        </>
    )
}
export default On