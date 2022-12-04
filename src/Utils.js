import React, { useState, useEffect } from 'react';

export const TaskList = (props) =>{
    return (
    <div key={props.id} style={{backgroundColor:props.completed? "green":"white"}}>
        <h1>{props.name}</h1>
    <button onClick={()=>props.deleteTask(props.id)}>x</button>
    <button onClick={()=>props.completeTask(props.id)}>Completed</button>
    </div>)
 };


export const Text = () =>{
    const [text,setText] = useState("");

    useEffect(()=>{
        console.log("Component mounted")
        return () => {
            console.log("COMPONENT UNMOUNTED")
        }
    },[])

    return (
        <div>
            <input 
                onChange={
                    (event) => {
                        setText(event.target.value)
                    }
                }
            />
         <h1>{text}</h1>
        </div>
    )
}