import React from "react";

export default function TodoField(){
    return(
        <div className="todoField">
            <input 
            type="text" 
            className="todoField__input"
            placeholder="Yapılacak görev yazınız..."
            />
            <button className="todoField__btn">Add</button>
        </div>
    )
}