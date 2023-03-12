import { ChangeProfile } from "../components/ChangeProfile";

const Menu = (props)=>{
    return ( 
    <div> 
        Profil Sayfasına hoşgeldin {props.usernmae}
        <ChangeProfile setUsername={props.setUsername}/>
    </div>)
}

export default Menu;