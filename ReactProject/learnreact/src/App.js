import React, { useEffect, useState } from "react";
import Container from "./components/container";
import BurgerList from "./components/burger-list";
import { API, URI } from "./instance";

function App(){

  const [data, setData] = useState([]);
  useEffect(()=>{
    const getBurgers = async()=>{
      const res = await  API.get(URI);
      setData(res.data);
    };
    getBurgers();
  },[]);
  useEffect(()=>{
    console.log(data);
  },[data,])

   return(
    <div className="bg-orange-500 h-screen py-10">
      
      <Container>
        <h1 className="text-center text-3xl text-black font-extrabold">Burger App </h1>
        <BurgerList/>
      </Container>
    </div>
  )
}
export default App;


