import { useContext, useState } from 'react'
// import './App.css'
import {TodoContext, TodoContextProvider} from "./components/TodoContext/TodoContext"
import AddTodo from "./components/Todo/AddTodo"
import TodoList from './components/Todo/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  // const {todoList} = useContext(TodoContext);
  const  addTodo = (todo)=>{
    setTodos([{id: new Date(), todo, completed: false}, ...todos])
    // console.log(todos)
  };
  const deleteTodo =  (id)=>{
    setTodos(todos.filter((el)=> el.id != id));
  };


  const editTodo =  (id, todo)=>{
    setTodos(todos.map((item)=> item.id == id ? todo : item))
  }

  const toggleCompleted = (id)=>{
    setTodos(todos.map((item)=> item.id == id ? {...item, completed: !item.completed } : item))
  }
  return (
    <>
     <TodoContextProvider value={{todos, addTodo, deleteTodo, editTodo, toggleCompleted}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <AddTodo/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        <TodoList/>
                    </div>
                </div>
            </div>
     </TodoContextProvider>
    </>
  )
}

export default App
