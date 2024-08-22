// import React from "react"

import { useState } from "react";

function PasswordGenerator() {
    const [passLength, setPassLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [symbolAllowed, setSymbolAllowed] = useState(false);
    const [password, setPassword] = useState("")
    function passGenerator(passLength) {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let digits = "0123456789";
        let special_symbols = "!@#$%^&*()-_=+[]{}<>?~";
        let pass = ""
        console.log(numberAllowed, symbolAllowed)
        if (numberAllowed) {
            str = str + digits;
        }
        if (symbolAllowed) {
            str = str + special_symbols;
        }
        for (let i = 0; i < passLength; i++) {
            pass = pass + str[Math.floor(Math.random() * str.length)]
        }
        setPassword(pass)
    }
    return <>
        <h1 >Password Generator</h1>
        <div>
            <input value={password} readOnly placeholder="password" type="text"  className="p-3 text-white"/>
            <button>Copy</button>
        </div>
        <div>
        <input onChange={(e) => { setPassLength(e.target.value); passGenerator(passLength) }} type="range" min={1} max={20} value={passLength}></input>
        <label htmlFor="passLength"> Length {passLength}</label>
        </div>
        <div>
            <input defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed(!numberAllowed);}} type="checkbox" name="numberAllowed" id="numberAllowed" />
            <label htmlFor="">Numbers</label>
        </div>
        <div>
            <input defaultChecked={symbolAllowed} onChange={()=>{setSymbolAllowed(!symbolAllowed);}} type="checkbox" name="symbolAllowed" id="symbolAllowed" />
            <label htmlFor="">Special Characters</label>
        </div>
    </>
}

export default PasswordGenerator;