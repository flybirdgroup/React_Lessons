import React from 'react';

export const TaskList = (props) =>{
    return (
    <div key={props.id} style={{backgroundColor:props.completed? "green":"white"}}>
        <h1>{props.name}</h1>
    <button onClick={()=>props.deleteTask(props.id)}>x</button>
    <button onClick={()=>props.completeTask(props.id)}>Completed</button>
    </div>)
 };