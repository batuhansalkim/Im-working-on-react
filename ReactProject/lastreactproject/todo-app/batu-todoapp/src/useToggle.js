import { useState } from "react";
const useToggle = (initialVal = false)=>{
    const [state,setState] = useState(initialVal);

    const toggle = ()=>{
        setState((anahtar)=>!anahtar);
    }

    return [state,toggle];
}

export default useToggle;