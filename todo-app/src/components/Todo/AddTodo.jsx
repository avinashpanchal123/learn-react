import { useState,  useEffect, useContext } from "react"
import { TodoContext } from "../TodoContext/TodoContext";


export default  function AddTodo() {

    const {todos, addTodo} = useContext(TodoContext)
    const [task, setTask] = useState("");

    function addTask(e){
        e.preventDefault();
        console.log(task)
        // console.log(addTodo)
        addTodo(task)
    }

    useEffect(()=>{
        
    }, [todos])
    return (
        <form  className="flex">
        <input
            type="text"
            placeholder="Write Todo..."
            onChange={(e)=> setTask(e.target.value)}
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button type="submit" onClick={addTask} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
    )
}