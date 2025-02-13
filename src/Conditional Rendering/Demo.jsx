import React from "react";
import CompA from "./CompA";
import CompB from "./CompB";

const Demo=()=>{
    let a=10;
    if(a>5){
        return(
            <>
               <CompA/>
            </>
        )
    }
    else{
        return(
            <>
              <CompB/>
            </>
        )
    }
    
}
export default Demo