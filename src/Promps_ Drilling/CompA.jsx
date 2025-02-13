import React from "react";
import CompB from "./CompB"

const CompA=()=>{
    let num=100;
  return (
    <>
       <h1>Im in CompA</h1>
       <CompB num={num}/>
    </>
  )  
}
export default CompA