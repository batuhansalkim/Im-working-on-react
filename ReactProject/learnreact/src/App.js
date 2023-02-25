import React from "react";
import Container from "./components/container";
import BurgerList from "./components/burger-list";

function App(){
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


