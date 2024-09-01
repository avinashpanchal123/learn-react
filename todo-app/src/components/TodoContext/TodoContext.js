import {context, createContext} from 'react';


export const TodoContext = createContext({
    todos:[],
    addTodo: (item)=>{

    },
    deleteTodo: (id)=>{

    },
    editTodo: (id, todo)=>{

    }
});

export const TodoContextProvider = TodoContext.Provider;

