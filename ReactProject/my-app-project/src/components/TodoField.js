import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

const TodoField = ({addTodo}) =>{
    
    const [value,setValue]  = useState('')


    return(
        <div className="todoField">
            <input value={value}
            onChange={(e)=>setValue(e.target.value)} 
            className="todoField__input" type="text" />
            <button onClick={()=> addTodo({
                id:uuidv4(),
                name:value,
                status:false
            })} className="todoField__btn">Ekle</button>
        </div>
    )
}

export default TodoField;
