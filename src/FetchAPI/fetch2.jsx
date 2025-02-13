import React, { useEffect, useState }  from "react";


const  Fetch2 =()=>{

    let  [state,setState] = useState([])
   
        let fetch=()=>{
            let  x = fetch('https://dummyjson.com/products')
        console.log(x);
        x.then((res)=>{
            console.log(res);
            return res.json();
        }).then((data)=>{
            console.log(data);
            setState(data);
        });
        }
    
    useEffect(()=>{
        fetch()
    },[])
       
      
        return(
            <div>
               <h1>Fetch 2

               </h1>
               {state.map((obj)=>{
                return <h2>{obj.id}</h2>
               })}
                </div>
        )
    }



export default Fetch2