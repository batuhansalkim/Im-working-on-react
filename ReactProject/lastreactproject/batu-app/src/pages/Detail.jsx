import React, { useEffect, useState } from "react";
import arr from "../data";
import { useParams } from "react-router-dom";

const Detail = ()=>{
    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(()=>{
        setData(arr);
    },[id]);

    console.log("data",data);

    const redirecFunc = ()=>{
        window.location = "/"
    }
    return(
        <>
            <button onClick={redirecFunc}>Anasayfa</button>
            {
                data.filter(dt=> dt.id == id).map((dat)=>(
                    <div key={dat.id}>{dat.name}</div>
                ))
            }
        </>
    )
}

export default Detail;