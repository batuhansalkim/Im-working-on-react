import React, { useState,useEffect } from "react";

export default function Counter(){

    const [count,setCount] = useState(0);

    useEffect(()=>{
        //component update
        document.title =`Buton ${count} times clicked` 
    })

    return(
        <div>
            <p>Button {count} times clicked.</p>
            <button onClick={()=>setCount(count + 1)}>Arttır</button>
            <button onClick={()=>setCount(count-1)}>Azalat</button>
        </div>
    )
}

