import React, { useState } from 'react'
import './input.css'
import {useTodo} from "../context/todocontextlocal"
function Input(){
  const [mess,setmess] = useState("");
  const {addtodo} = useTodo();
  
  const add = (e) =>{
    e.preventDefault()

    if(!mess){
      return;
    }
    addtodo({mess,completed:false})
    setmess("")


  }

  return (
    <form onSubmit={add}>
      <div className='input-main'>
        <div className='input-main1'>
           <div className='input-main2'>
           <p>
                Manage your Todos
            </p>
            <input type="text"  className='input-main1-input' placeholder='Write Todo.....' value={mess} onChange={(e) => {setmess(e.target.value)}}/>
           </div>
           <div className='button-input-main'>
           <button className='input-main1-button' type='submit'>Save</button>
           </div>
        </div>
    </div>
    </form>
    
  )
}

export default Input