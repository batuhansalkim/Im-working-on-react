import React from "react";
import BurgerCard from "./burger-card";


const BurgerList = ()=>{
    return <div className="grid grid-cols-4 gap-10">
        <BurgerCard/>
        <BurgerCard/>
        <BurgerCard/>
        <BurgerCard/>
    </div>;
}
export default BurgerList;
