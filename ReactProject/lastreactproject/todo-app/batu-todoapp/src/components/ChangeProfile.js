import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";


export const ChangeProfile = ()=>{
    const { setUsername } = useContext(AppContext);
    const [newUsername, setnewUsername] = useState("");
    return(
        <div>
            <input type="text" onChange={(event)=>setnewUsername(event.target.value)}/>
            <button onClick={() => setUsername(newUsername)}>Change Username</button>
        </div>
    )
}