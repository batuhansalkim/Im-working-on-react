import './App.css';
import React, {useState,useEffect} from "react";

function App() {

  const [count,setCount]  = useState(10);
  
  useEffect(()=>{
    document.title = `you clicked ${count} times `;
  });



  return(
    <div>
      <p>you clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>click me</button>      
    </div>
  )
}

export default App;
