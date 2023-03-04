import React from "react";
import arr from "../data";

const Home = ()=>{
    
    


    const redirecFunc = (id)=>{
        window.location = `/detail/${id}`
    }

    return(
        <div>
            {
                arr.map(ar=>(
                    <div onClick={()=>redirecFunc(ar.id)} style={{margin:"10px", cursor:"pointer",border:"1px solid black", padding:"5px"}} key={ar.id}>
                        {ar.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Home;







