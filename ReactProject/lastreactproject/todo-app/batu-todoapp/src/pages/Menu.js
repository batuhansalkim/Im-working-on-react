import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
const Menu = ()=>{
    const {username,setUsername} = AppContext(useContext); 
    return ( 
    <div> 
        Profil Sayfasına hoşgeldin {username}
        {/* <ChangeProfile setUsername={setUsername}/> */}
    </div>)
}

export default Menu;