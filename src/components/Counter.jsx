import React from "react";
import { useEffect, useState } from "react"

const Counter  = (props)=>{
    let [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("first effect");

        return()=>{
            console.log("first unmount");
        }
    },[]);

    useEffect(()=>{
        console.log("second effect");

        return()=>{
            console.log("second unmount");
        }
    },[count]);

    const getInc = ()=>{
        setCount(count+1);
    }

    const getDec = ()=>{
        setCount(count-1);
    }
    return(
        <div>
            {count}
        <button onClick={getInc}>INC</button>
        <button onClick={getDec}>DEC</button>
        </div>
    )
}

export default Counter;