import React from "react"
import Navbar from "./Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./home"
import About from "./about"
import Menu from "./menu"
import Franchise from "./franchise"

const Routing1=()=>{
    return(
        <div>
             <BrowserRouter>

                <Navbar />
                <Routes>
                       <Route path="/home" element={<Home/>}/>
                       <Route path="/about" element={<About/>}/>
                       <Route path="/menu" element={<Menu/>}/>
                       <Route path="/franchise" element={<Franchise/>}/>
                </Routes>
                {/* </Navbar> */}
             </BrowserRouter>
        </div>

    )
}
export default Routing1