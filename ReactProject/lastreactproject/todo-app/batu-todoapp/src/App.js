import './App.css';
import Axios from "axios";
import {useState,useEffect} from "react"






function App() {
  const [catFact, setCatFact] =  useState("");

  useEffect(()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{console.log(res.data.fact[1]);
  });
  }, []);


  return (
    <div className='App'>
      <button>Generate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default App;
