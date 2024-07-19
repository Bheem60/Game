import React, { useCallback, useEffect, useMemo } from "react";
import jsonFile from "./large.json";
const getFileCount = (arr)=>{
    console.log("record count")
    let count = 0;
    for(let i=0;i<arr.length;i++) count ++
    return count;
}
const MyComponent = (props)=>{
    const largeFileCount = useMemo(()=>getFileCount(jsonFile),[]);
    
    const handleOnWindowLoad = useCallback(()=>{
        console.log("add listener");
    },[])
    useEffect(()=>{
        console.log()
        window.addEventListener("load",handleOnWindowLoad);
        return()=>{
            window.removeEventListener("load",handleOnWindowLoad);
        }
    },[props.count,handleOnWindowLoad]);
   
    return(
        <div>
            <div>My Component</div>
            <h2>{largeFileCount}</h2>
            <p>{props.count}</p>
        </div>
    )
}

export default MyComponent;