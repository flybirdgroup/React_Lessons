import React from 'react';
import './App.css';
// import {User} from './User'
import {useState}from "react";


const App = () => {
  const [todoList,setTodoList] = useState([''])
  const [newTask,setNewTask] = useState("")
  
  return <div className='App'>
          <div>
            <input onChange={(event) =>{setNewTask(event.target.value)}}/>
            <button onClick={() =>{setTodoList([...todoList,newTask])}}>Add Task</button>
            {todoList.map((task,key)=>{ return <div key={key}>{task}</div>})}
          </div>
         </div>
  
};


export default App