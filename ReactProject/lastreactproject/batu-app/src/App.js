import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [country,setCountry] = useState([]);

  useEffect(()=>{
    const getCountry = async()=>{
      const data = await axios.get("https://restcountries.com/v3.1/all")
      setCountry(data);
    }
    getCountry()
  },[])
  console.log(country);

//   const [text,setText] = useState("");
//   const [message,setMessage] = useState([])
  
//   const onChangeFunc= (e)=>{
//     setText(e.target.value);
//     console.log(e,"e");
//   }
//   const messageFunc = ()=>{
//     setMessage(prev=>[...prev,text])
//     setText("");
//   }
// console.log(message,"message");
  return(
    <>
    {
      country?.data?.map((dt,i)=>(
        <div key={i}>{dt.name.common}</div>
      ))
    }
       {/* <input value={text} onChange={onChangeFunc} type="text" placeholder='ekle' />
       <button onClick={messageFunc}>ekle</button>
       {
        message?.map((msg,i)=>(
          <div key={i}>{msg}</div>
        ))
       } */}
    </>
  )
}

export default App;
//2:02:45 de kaldım