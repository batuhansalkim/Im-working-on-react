import React, { useState } from 'react';
import "./App.css";
import TodoField from './components/TodoField';
import Todos from './components/Todos';



function App(){
  const [todos,setTodos] = useState([
  {
    id:1,
    name:"batu",
    status : false
  },
    {
      id: 2,
      name: "aslıhan",
      status: true
    }
]);

const addTodo = (todo)=>{
  if(todo.name){
    setTodos([...todos, todo]);
  }
}
const deleteTodo=(id)=>{
  let newTodos = todos.filter((obje)=>obje.id !== id);
  setTodos(newTodos);
}


const doneTodo = (id)=>{
  let currentTodo = todos.find((istedigimseyolurburasi)=>istedigimseyolurburasi.id === id);
  currentTodo.status=true;
  setTodos([...todos]);
}


return(
    <div className='app'>
      <h1>Yapılacaklar App</h1>
      <TodoField addTodo = {addTodo}/>
      <Todos doneTodo={doneTodo} deleteTodo={deleteTodo} todos={todos}/>
    </div>
  )
}

export default App;