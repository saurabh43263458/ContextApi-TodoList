import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoProvider} from './context/todocontextlocal'
import Input from './components/input'
import TodoItem from './components/todoitem'

function App() {
   const [todos,settodos]=useState([])

   const addtodo =(mess)=>{
      settodos((p) =>[{id:Date.now(), ...mess}, ...p])
   }
   const updatetodo = (id,mess) =>{
       settodos((p)=> p.map((pt) => (pt.id===id ? mess : pt)))
   }
   const deletetodo =(id)=>{
      settodos((p)=>p.filter((todo)=> todo.id !== id))
   }
   const togglecomplete = (id) =>{
    settodos((p)=>p.map((pt)=>pt.id ===id ? {...pt,completed:!pt.completed} : pt))
   }

   useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))
     
    if(todos && todos.length>0){
settodos(todos);
    }
   },[])

   useEffect(()=>
  {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  

  return (
    <TodoProvider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
      <div className='main'>
      <Input/>
    <div>
     
       <div className="main2">
       {todos.map((todo)=>(
        <div key={todo.id} >
          <TodoItem todo={todo} {...todo} />
        </div>
     ) )}
      </div>

    </div>
    </div>
    </TodoProvider>
  )
}

export default App
