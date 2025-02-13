import React from 'react'
import {Link} from "react-router-dom"

const Navbar=()=>{
    return(
        <div style={{display:"flex",justifyContent:"space-around",fontSize:30,backgroundColor:'skyblue'}}>
             <Link to="/Home">Home</Link>
             <Link to="/about">about</Link>
             <Link to="/menu">menu</Link>
             <Link to="/franchise">franchise</Link>
        </div>
    )
}
export default Navbar