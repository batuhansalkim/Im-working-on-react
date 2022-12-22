import { useState } from "react";
function FunctionalCounter(){
    const [counter, setCounter] = useState(0);    
    
    const arttir = ()=>{
        setCounter(counter +5);
    }
    const azalt = ()=>{
        setCounter(counter - 5);
    }

  return <div>
    <div>Counter value: {counter}</div>
    <div><button onClick={arttir}>Arttir</button></div>
    <div><button onClick={azalt}>Azalt</button></div>
  </div>
}

export default FunctionalCounter;












