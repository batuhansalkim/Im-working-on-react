import './App.css';
import Axios from "axios";
import {useState,useEffect} from "react"


function App() {
  
  const [name,setName] = useState("");
  const [predictedAge, setpredictedAge] = useState({});
  
  const fetchData = ()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setpredictedAge(res.data);
    })
  }


  return (
    <div className='App'>
      
      <input type="text" placeholder='Ex. Pedro...' onChange={(e)=>{setName(e.target.value)}}/>

      
      <button onClick={fetchData}>Predict Age</button>
      
      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predict Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
      
    </div>
  );
}

export default App;
