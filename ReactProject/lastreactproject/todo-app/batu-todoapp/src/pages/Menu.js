import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
const Menu = ()=>{
    const { username } = useContext(AppContext); 
    return ( 
    <div> 
        Profil Sayfasına hoşgeldin {username}
        <ChangeProfile/>
    </div>)
}

export default Menu;