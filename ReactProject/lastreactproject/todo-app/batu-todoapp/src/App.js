import './App.css';
import Axios from "axios";
import {useState,useEffect} from "react"


function App() {
  const [catFact, setCatFact] =  useState("");

  const fetchCatFact = ()=>{
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  useEffect(()=>{
    fetchCatFact()
  }, []);


  return (
    <div className='App'>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
