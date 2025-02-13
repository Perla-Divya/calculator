import React, { useEffect , useState } from "react";


const Fetch =()=>{
    let [state,setState]=useState([])
   let fetchApi =()=>{
    let x=fetch('https://dummyjson.com/products');
    console.log(x);
    x.then((res)=>{
        console.log(res);
        return res.json();
    }).then((data)=>{
        // console.log(data);
        setState(data);
    });
   }

    useEffect (()=>{
        fetchApi();
    },[])
    return(
   <div>
    <table border={3}>
        <thead>
        <tr>
            <td>id</td>
            <td>title</td>
        </tr>
     
        </thead>
        <tbody>
        {state.map(({id,title})=>{
          return(
            <tr>
            <td>{id}</td>
            <td>{title}</td>
           </tr>
          )
        })}
        
         </tbody> 
        
   
    </table>

   </div>
    )
       
}
export default Fetch