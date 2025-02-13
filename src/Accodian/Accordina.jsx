import { acc_datas } from "./acc_datas";
import Acc1 from "./Acc1";
import { useState } from "react";
const Accordina =()=>{
let  [state,setState]=useState(false)

let dark={
    backgroundColor:"black",
    color:"white"
}
let light ={
    backgroundColor:"white",
    color:"black"
}
let handleClick =()=>{
 setState(!state);
} 
return(
            <div className="div"  style={state?dark:light}>
                     {acc_datas.map((object)=>{
                    let {id,question,answer}=object
                    return<Acc1 id={id} question={question} answer={answer}/>
                })}
                <button onClick={handleClick}>dark</button>
            </div>
    )

}
export default Accordina
