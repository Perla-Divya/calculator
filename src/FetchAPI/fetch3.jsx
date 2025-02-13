import React from 'react' ;
import axios from 'axios'
import { useState ,useEffect } from 'react';



const Fetch3 =()=>{
    let[state,setState] = useState()
let fetchApi =()=>{
    let x=axios.get("https://fakestoreapi.com/products");
    console.log(x);
    x.then((res)=>{
        console.log(res);
        console.log(res.data.hits);
        setState(res.data.hits)

    });
    useEffect(()=>{
fetchApi();
    },[])


}
return(
  <>
  <h1>Fetch 3</h1>
  {state.map(({title})=>{
    return <h1>
        {title}
    </h1>
  })}
  
  </>
)



}
export default  Fetch3