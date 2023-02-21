import React from "react";

export default function Todos(){
    return(
        <ul className="todos">
            <li className="todos__item">
                <span className="todos__text">GYM</span>
                <div className="todos__buttons">
                    <a href="#">✅</a>
                    <a href="#">❌</a>
                </div>
            </li>
        </ul>
    )
}



