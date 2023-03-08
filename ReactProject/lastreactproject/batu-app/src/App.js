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
  const [yas,degistirYas] = useState(0)
  const yasArttır = ()=>{
    degistirYas(yas +1 )
  }
  const yasAzalt = ()=>{
    degistirYas(yas - 1)
  }
  const [yazi,yaziDegistir] = useState("");

  const yazidegistirfonk = (e)=>{
    yaziDegistir(e.target.value);
  }
  const [showText, setShowText] = useState(true)
  const [textColor, setTextColor]= useState("blue");


  const [count,setCount] = useState(0);
  const sayiyiArttir = ()=>{
    setCount(count +1);
  }
  const sayiyiAzalt= ()=>{
    setCount(count -1)
  }
  const sayiyiSifirYap = ()=>{
    setCount(0)
  }
  return (
    <div className='App'>
      <button onClick={sayiyiArttir}>Arttır</button>
      <button onClick={sayiyiAzalt}>Azalt</button>
      <button onClick={sayiyiSifirYap}>Sıfır Yap</button>
      {count}
    </div>
  )
}




export default App;
