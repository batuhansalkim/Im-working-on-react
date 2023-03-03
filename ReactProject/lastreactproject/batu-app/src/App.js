import './App.css';
import React, {useState,useEffect} from "react";

function App() {

  const [status,setStatus]  = useState("false");

  useEffect(()=>{
    setStatus("deneme2")
  },50000)

  return(
    <div>
      {status}
    </div>
  )
 
 
}

export default App;
