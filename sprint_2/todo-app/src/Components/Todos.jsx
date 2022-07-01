import React from 'react'
import { useState } from 'react'
import TodoItems from './TodoItems'
import {v4 as uuid} from "uuid"
import { useCallback } from 'react'
 const initalState = [
    {
        id:1,
        title:"task1",
        status:false
    },
    {
        id:2,
        title:"task2",
        status:false
    },
    {
        id:3,
        title:"task3",
        status:false
    },
    {
        id:4,
        title:"task4",
        status:false
    }
    
 ]
function Todos() {
    const [todo,setTodo] =useState(initalState)
    const [currentTodo,setCurrentTodo] = useState('')
    const handleChange =(e)=>{
        setCurrentTodo(e.target.value)
    }
    const handleAddTask=()=>{
        const payload = {id:uuid(),title:currentTodo,status:false}
        setTodo([...todo,payload])
        setCurrentTodo("")
    }
    // const toggleStatus= useCallback((id)=>{
    //     let newTodo = todo.map((item)=>item.id===id ? {...item,status:!item.status}:item);
    //     setTodo(newTodo)
    // },[todo])

    const toggleStatus= useCallback((id)=>{
        
        setTodo((pre)=>pre.map((item)=>item.id===id ? {...item,status:!item.status}:item))
    },[])
    // const itemsDelete = useCallback((id)=>{
    //    let newTodo =todo.filter((item)=>item.id!==id)
    //    setTodo(newTodo)
    // },[todo])
    const itemsDelete = useCallback((id)=>{
        
        setTodo((pre)=>pre.filter((item)=>item.id!==id))
     },[])
  return (
    <div>
       <h2>Todos</h2>
       <input type="text" value={currentTodo} onChange={handleChange} />
       <button onClick={handleAddTask}>Add</button>
       {todo?.length&& todo.map((items)=>(
           <TodoItems key={items.id} {...items} toggleStatus={toggleStatus} itemsDelete={itemsDelete}/>
       ))}
    </div>
  )
}

export default Todos