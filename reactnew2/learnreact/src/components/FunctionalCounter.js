import { useState } from "react";
function FunctionalCounter(){

    const [counter,setCounter] = useState(0);

  const arttir = ()=>{
    setCounter(counter+1);
  }

  const azalt = ()=>{
    setCounter(counter -1);
  }

  return <div>
     <div>Counter Value : {counter}</div>
     <div><button onClick={arttir}>Arttir</button></div>
     <div><button onClick={azalt}>Azalt</button></div>
  </div>
}

export default FunctionalCounter;












