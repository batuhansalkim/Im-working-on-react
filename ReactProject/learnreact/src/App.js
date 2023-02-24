import React, { useEffect, useState } from "react";
import axios from "axios";

function App(){

  const [todos,setTodos] = useState([]);

  useEffect(()=>{
  const fetchTodos = async ()=>{
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
      setTodos(response.data);
    }catch(err){
      console.log(err);
    }
  }
  fetchTodos();
  },[])

  return(
    <>
    <div className="todo-wrapper">
      {
        todos.length>0 && todos.map((todo)=>(
          <div key={todo.id} className="todo">
            <h3 className="todo-title">{todo.title}</h3>
            <input type="checkbox" checked ={todo.completed}className="todo-completed" />
          </div>
        ))
      }
    </div>
    </>
  )
}
export default App;


