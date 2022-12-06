import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Form } from "../components/Form";



export const Home =() =>{
    const {username} = useContext(AppContext)
    return (
        <div>
         <h1>This is the home page and user is {username}</h1>
           <Form />
           </div>
           )
}