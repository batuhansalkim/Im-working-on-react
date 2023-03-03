import './App.css';
import React, {useState,useRef} from "react";

function App() {

  const [count,setCount]  = useState(0);  
  const firstRef = useRef(0);

  const func = (num)=>{

  }

  console.log("firstRef",firstRef.current.value = 7);

  const refFunc = ()=>{
   // firstRef.current
  }
  return(
    <div>
      <div>{status}</div>
      <input onClick={refFunc} ref={firstRef} placeholder='ara' />
    </div>
  )
 
 
}

export default App;
//1:14 de kaldım