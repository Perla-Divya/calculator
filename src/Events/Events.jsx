import React from "react";

 const Events=()=>{
      let handleClick=()=>{
          console.log("Button is clicked")

      }
    return (
        <div>
              <h2>Javascript</h2>
              <button onClick={handleClick}>Change the Language</button>
              <button onClick={()=>{handleClick()}}></button>
              <button onClick={()=>{console.log("Diya")}}>print name</button>
        </div>
    )

 }

 export default Events