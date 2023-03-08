import React from "react";
import { useState,useEffect } from "react";

const Text = ()=>{
    const [text,setText] = useState("");

    useEffect(()=>{
        console.log("adsadsad")
    })

    return(
        <div>
            <input type="text" onChange={(e)=>{setText(e.target.value)}} />

            <h1>{text}</h1>
        </div>
    )
}



export default Text;