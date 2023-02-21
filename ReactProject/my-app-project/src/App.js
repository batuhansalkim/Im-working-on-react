import React, { Component } from 'react';
import "./App.css";
import TodoField from './components/TodoField';
import Todos from './components/Todos';


export default class App extends Component {
  
  render() {
    return (
      <div className='container'>
        <h1>todos</h1>
        <TodoField/>
        <Todos/>
      </div>
    );
  }
}

