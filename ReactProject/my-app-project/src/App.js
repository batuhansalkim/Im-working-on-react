import React, { Component, useState } from 'react';
import "./App.css";
import TodoField from './components/TodoField';
import Todos from './components/Todos';


function App(){
  const [todos,setTodos]=useState([
    {
      id:1,
      name:"kitap oku",
      status:false,
    },
    {
      id: 2,
      name: "kod yaz",
      status: true,
    },
  ])
  return(
    <div className='app'>
      <h1>todos</h1>
      <TodoField/>
      <Todos todos = {todos}/>
    </div>
  )
}

export default App;