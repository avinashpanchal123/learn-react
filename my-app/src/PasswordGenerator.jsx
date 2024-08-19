// import React from "react"

import { useState } from "react";

function PasswordGenerator() {
    const [passLength, setPassLength] = useState(8)
    return <>
    <h1>Hello world</h1>
    <input onChange={()=>{}} type="range" min={1} max={20} value={passLength}></input>
    <>{passLength}</>
    </>
}

export default PasswordGenerator;