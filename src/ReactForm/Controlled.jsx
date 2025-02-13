import React from "react";
import { useState } from "react";

const Controlled1 =()=>{
let [username,SetUsername] =useState();
let[password,setPassword]=useState();
let handchange =(e)=>{
    SetUsername(e.target.value)
 }
 let handchange1 =(e)=>{
    setPassword(e.target.value)
 }
  
return(
    <>
    <h1>Controlled components</h1>
    <form action="">
    <input type ="text" name= "username"  onChange={handchange}value={username} placeholder="username"/> <br></br><br></br>
    <input type ="password" name= "password"  onChange={handchange1} value={password} placeholder="password"/> <br></br><br></br>
    <button>Submit</button>
    <h1>Username:{username}</h1>
    <h1>Password:{password}</h1>
    </form>
    
    </>
)
}
export default Controlled1