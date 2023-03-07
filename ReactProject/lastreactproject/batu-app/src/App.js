import styles from './App.module.css';
import React from "react";

function App() {
 const age = 16;
  return(
    <div>
      {age>=18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
    </div>
  )
 }
  


export default App;
