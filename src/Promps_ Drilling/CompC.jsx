import React from "react";
// import CompC from "./CompC"

 const CompC=(props)=>{
      console.log(props);
   return (
    <>
       <h1>im in CompC-{props.num}</h1>
       {/* <CompC num={props.num}/> */}
    </>
   )
 }
 export default CompC