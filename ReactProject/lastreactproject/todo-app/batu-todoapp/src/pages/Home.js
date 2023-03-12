import { useContext } from "react";
import { AppContext } from "../App";

const Home= ()=>{
    const {username} = useContext(AppContext);
    return <h1>Anasayfaya hoşgeldin {username} </h1>
}
export default Home;
