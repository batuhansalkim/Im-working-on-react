import React from "react";


const BurgerCard = ()=>{
    return(
        <div className="bg-white flex flex-col gap-6 px-16 py-4 rounded-xl shadow-xl hover:scale-110 transition-all ease-in duration-150">
            <h2>Name</h2>
            <h3>Restaurant</h3>
            <p>Description</p>
            <a href="https?//www.youtube.com" target="_blank">Link</a>
            <div className="flex overflow-x-auto gap-3 mt-2 text-gray-700">
                <span className="bg-orange-300 p-3 rounded-xl">Sos</span>
                <span className="bg-orange-300 p-3 rounded-xl">Sos</span>
                <span className="bg-orange-300 p-3 rounded-xl">Sos</span>
                <span className="bg-orange-300 p-3 rounded-xl">Sos</span>
                

            </div>
        </div>
    )
}

export default BurgerCard;