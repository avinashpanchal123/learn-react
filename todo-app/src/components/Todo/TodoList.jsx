import { useContext } from "react"
import { TodoContext } from "../TodoContext/TodoContext"
import TodoItem from "./TodoItem"


export default function TodoList() {
    const { todos } = useContext(TodoContext)
    console.log(todos)
    return (
        <>
            {todos.map((item) => {
               return <TodoItem key={item.id} todo={item} />
            })
            }
        </>
    )
}