import React from 'react';
import './App.css';
// import {User} from './User'
import {useState}from "react";


const App = () => {
  const [todoList,setTodoList] = useState([])
  const [newTask,setNewTask] = useState("")
  const deleteTask =(taskname,index) =>{
    setTodoList(todoList.filter((task,key)=>{return (task,key) !== (taskname,index)}))
  }
  
  return <div className='App'>
          <div>
            <input onChange={(event) =>{setNewTask(event.target.value)}}/>
            <button onClick={() =>{setTodoList([...todoList,newTask])}}>Add Task</button>

            {todoList.map((task,key)=>{ return <div key={key}>{task} <button onClick={()=>{deleteTask(task,key)}}>x</button></div>})}
          </div>
         </div>
  
};


export default App