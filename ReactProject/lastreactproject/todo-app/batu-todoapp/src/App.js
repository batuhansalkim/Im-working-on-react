import './App.css';
import Axios from "axios";
import {useState,useEffect} from "react"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse= (excuse)=>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res)=>{
      setGeneratedExcuse(res.data[0].excuse);
    })
  }
  


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
