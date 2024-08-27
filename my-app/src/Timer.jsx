import {useEffect, useState} from 'react';

function Timer(){
   const [count, setCount] = useState(10)
    // useEffect(()=>{
    //    console.log("I am called");
    // },[count])
    function tempFunc(){
        for( let i = 0 ; i < 100000000000; i++){
            console.log()
        }
    }
    tempFunc()
    return (
        <>
        <div>{count}</div>
        <button onClick={()=>{setCount(count-1)}}>
            click me
        </button>
    </>
    )
}

export default Timer;