import React,{useRef} from "react";

const Ref2=()=>{
    let x=useRef()
    let y=useRef()
    let handleclick=()=>{
        console.log(x.current);
        x.current.style.backgroundColor="yellow"
    }
    let focusClick=()=>{
        console.log(y.current);
        y.current.focus()
    }
    return(
        <div>
            <h1 ref={x}>Lorem ipsum dolor sit amet.</h1>
            <button onClick={handleclick}>click here</button>
            <input type="text" name="" id=""  ref={y}/>
            <button onclick={focusClick}>Focus</button>
        </div>
        
    )
}
export default Ref2