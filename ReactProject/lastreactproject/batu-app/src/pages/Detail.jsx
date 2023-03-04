import React from "react";


const Detail = ()=>{
    const redirecFunc = ()=>{
        window.location = "/"
    }
    return(
        <div>
            <button onClick={redirecFunc}>Anasayfa</button>
        </div>
    )
}

export default Detail;