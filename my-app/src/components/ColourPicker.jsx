// import React from "react";

import { useState } from "react";

function ColourPicker(){
    const rainbowColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
    const [colour, setColor] = useState('black')

    function changeColor(color){
        setColor(color)
    }

    return (
        <>
        <div className="w-full h-screen duration-200" style={{backgroundColor:colour, width:"100%"}}>
        {
            rainbowColors.map((clr, index)=>{
                return <button key={index} className="rounded-3xl" onClick={()=>{changeColor(clr)}}style={{backgroundColor: clr}}>{clr}</button>
            })
          }
        </div>
        
        </>
    )
}

export default ColourPicker;