import { useState, useEffect } from "react";
import axios from 'axios';

function Message() {
    useEffect(() => {
        // axios.get('http://localhost:3000/').then((res)=>{
        //     console.log(res)
        // }).catch((err)=>{
        //     console.log(err)
        // })

    async function reqFunc() {
        try {
            let output = await axios.get('http://localhost:3000/');
            console.log(output, '++++++++++++');
        }catch(err){
            console.log(err);
            
        }
    }
    reqFunc();

    }, [])
    return <>
        <h1>Hello World</h1>
    </>
}

export default Message;