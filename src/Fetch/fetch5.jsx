import React,{useState,useEffect} from "react";
import axios from "axios";

const Fetch5=()=>{
    let [state,setState]=useState([])
    let fetchApi()=>{
        let x=axios.get("https://api.github.com/users");
    }
    console.log(x);
    x.then((response)=>{
        console.log(response);
        console.log(response.data.hits);
        setState(response.data.hits);
    })
};
    useEffect(()=>{
        fetchApi();
    }),[]
