import {createContext, useContext } from "react";

export const TodoContext  = createContext({
    todos:[{
        id:1,
        mess:"todo mssg",
        completed:false,
    }],
    addtodo:(mess) => {},
    updatetodo:(id,mess) => {},
    deletetodo:(id) => {},
    togglecomplete:(id) => {}
});

export const useTodo =()=>{
    return useContext(TodoContext);
}

export const TodoProvider =TodoContext.Provider