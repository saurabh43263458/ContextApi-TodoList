import React, { useState } from "react";
import "./todoitem.css";
import {useTodo} from "../context/todoContext";
function TodoItem(m){
    const [istodoeditable,setistodoeditable]= useState(false);
    const [todomess,settodomess] =useState(m.mess);
    const {updatetodo,deletetodo, togglecomplete} = useTodo();

    const edit = () =>{
        updatetodo(m.id,{...m,mess:todomess})
        setistodoeditable(false);
    }

    const toggle = () => {
        togglecomplete(m.id);
    }
    return (
        <div className="main-todoitem">
            <div className="main1-todoitem">
                <input type="checkbox" name="" id="" className="main1-todoitem-same1 main1-todoitem-input" checked={m.compeleted} onChange={toggle}/>
                <input type="text" name="" id=""  className="main1-todoitem-same2 main1-todoitem-input" 
                value={todomess} 
                onChange={(e)=>
                    settodomess(e.target.value)
                }
                readOnly={!istodoeditable}
                />
                <div>
               <div> <button className="main1-todoitem-same-buttton" onClick={()=>{
                if(m.compeleted) return;
                if(istodoeditable){
                    edit();
                }
                else{
                    setistodoeditable((p) => !p);
                }
               }}
               disabled={m.compeleted}
               >{istodoeditable ? "📂" :"✏️"}</button></div>
               <div className="main1-todoitem-botton-2"> <button className="main1-todoitem-same-buttton" onClick={()=>{
                deletetodo(m.id)
               }}>❌</button></div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;