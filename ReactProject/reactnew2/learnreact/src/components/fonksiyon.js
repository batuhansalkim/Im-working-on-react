import React from "react";

function fonskiyon(props){
    return(
        <div>
            Bugün Hava <span style={props.style}>{props.durum}</span> 
        </div>
    )
}
fonskiyon.defaultProps={
    durum:"bilgi alınamıyor",
    style:{backgroundColor: "red",color:"white",fontSize:11}
}

export default fonskiyon;
