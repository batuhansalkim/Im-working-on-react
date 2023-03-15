import { useState } from "react";

export const BatuhanSalkim = (deger = 0)=>{
    const [count, setCount] = useState(deger);    

    const arttır = ()=>{
        setCount((e)=>e+1);
    };
    const azalt = ()=>{
        setCount((e)=>e-1);
    };
    const reset = ()=>{
        setCount(0);
    };

    return (count,arttır,azalt,reset);
} 




