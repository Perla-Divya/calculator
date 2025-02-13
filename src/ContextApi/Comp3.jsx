import React,{useContext} from "react";
import {x} from './ContextApi'

const Comp3=()=>{
    let value=useContext(x);
    console.log(value)
    return(
        <div>
             <h1>This is Comp3-{value}</h1>
             {/* <x.Consumer>
              {
                (value)=>{
                    console.log(value)
                }
              }

             </x.Consumer> */}

        </div>
        
    )
}
export default Comp3