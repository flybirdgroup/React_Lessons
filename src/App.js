import React from 'react';
import './App.css';
// import {User} from './User'
import {useState}from "react";
import { TaskList } from './Utils';


const App = () => {

  const [todoList,setTodoList] = useState([])
  const [newTask,setNewTask] = useState("")
  
  const addTask =()=>{
    const task = {
      id: todoList.length ===0? 1:todoList[todoList.length-1].id +1,
      name: newTask,
      completed: false
    }
    setTodoList([...todoList,task])
    console.log(todoList)
    
  }
  const inputTask = (event) =>{
    setNewTask(event.target.value)
  }

  const deleteTask = (taskid) =>{
    setTodoList(todoList.filter((task)=>{return task.id !== taskid }))
  }

  const completeTask = (taskid) =>{
    console.log(taskid)
    setTodoList(
      todoList.map((task)=>{
        if (task.id === taskid) {return {...task, completed:true} 
      } else {
        return task;
      }
       })
    );
  };


  
  return <div className='App'>
          <div>
            <input onChange={inputTask}/>
            <button onClick={addTask}>Add Task</button>
            {todoList.map((task)=>{
              return (
            <TaskList name={task.name} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />
            )})}
          </div>
         </div>
  };


export default App