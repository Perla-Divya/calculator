import React, { useEffect, useState } from "react";
import { axiosInstance } from "../API/axiosInstance";


const Display=()=>{
    let[state,setState]=useState([]);
    //fetching data
    const fetchApi=()=>{
    let x =axiosInstance.get("/data");
    console.log(x);
    x.then((response)=>{
          console.log(response.data);
          setState(response.data) 
       });
    };
       useEffect(()=>{
      fetchApi();
    },[]);   
    //deleting data
    let deleteData=(id)=>{
        let x=axiosInstance.delete('data/${id}');
        console.log(x)
    }
    return(

        <div style={{textAlign:"center",alignItems:"center",Display:"flex",flexDirection:"column"}}>
        <br />
          <h1 style={{textAlign:"center",color:"blue"}}>Using Axios</h1>   
          <table border={5}>
            <thead>
                <tr>
                      <th>ID</th>
                      <th>STUDENTNAME</th>
                      <th>MARKS</th>
                </tr>
            </thead>
            <tbody>
                {
                  state.map(({id,studentName,marks})=>{
                    return(
                        <tr>
                            <td>{id}</td>
                            <td>{studentName}</td>
                            <td>{marks}</td>
                        </tr>
                    )



                })}
            </tbody>  
          </table>
        </div>
    );
};
export default Display