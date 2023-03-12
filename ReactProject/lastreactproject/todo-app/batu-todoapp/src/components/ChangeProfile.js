import { useState } from "react"
export const ChangeProfile = (props)=>{
    const [newUsername, setnewUsername] = useState("");
    return(
        <div>
            <input type="text" onChange={(event)=>setnewUsername(event.target.value)}/>
            <button onClick={()=>props.setUsername(newUsername)}>Change Username</button>
        </div>
    )
}