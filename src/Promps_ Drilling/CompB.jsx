import React from "react";
import CompC from "./CompC"

 const CompB=(props)=>{
      console.log(props);
   return (
    <>
       <h1>im in CompB-{props.num}</h1>
       <CompC num={props.num}/>
    </>
   )
 }
 export default CompB