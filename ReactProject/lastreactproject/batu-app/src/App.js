import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },

  ]
  const [age,setAge] = useState(0)
  const increaseAge = ()=>{
    
  }
  return (
    <div className='App'>
      {age}
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  )
}




export default App;
