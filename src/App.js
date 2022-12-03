import React from 'react';
import './App.css';
// import {User} from './User'
import {useState}from "react";


const App = () => {
  const [todoList,setTodoList] = useState([])
  const [newTask,setNewTask] = useState({})
  const addTask =()=>{

  }
  const inputTask = (event) =>{
    setNewTask(
      id=1,
      name=event.target.value
    )
  }

  
  return <div className='App'>
          <div>
            <input onChange={inputTask}/>
            <button onClick={addTask}>Add Task</button>

            {/* {todoList.map((task,key)=>{ return <div key={key}}>{task} <button onClick={() => {completeStatus()}}>complete</button><button onClick={()=>{deleteTask(task,key)}}>x</button></div>})} */}
          </div>
         </div>
  };


export default App