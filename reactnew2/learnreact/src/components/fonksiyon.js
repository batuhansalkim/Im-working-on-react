import React from "react";


function HelloWorld(){
    const fullName = "Batuhan SALKIM"
    const birthYear = 2001;
    const howOldAreYou = ()=> 2023 - birthYear;
    const Departman = "Yazılım";
    const Class = 1; 
    const style = {
        display:"grid",
        placeItems : "center",
    }
    return(
        <div style={style}>
            <h1>Batuhan SALKIM Değer ataması yapıyoruz</h1>
            <div>Ad : {fullName}</div>
            <div>Yaş : {howOldAreYou()}</div>
            <div>Sınıf : {Class}</div>
            <div>Bölüm : {Departman}</div>
        </div>
    )
}

export default HelloWorld;
