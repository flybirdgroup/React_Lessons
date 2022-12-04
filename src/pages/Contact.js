import React from "react"
import { useContext } from "react";
import { AppContext } from "../App";

export const Contact =() =>{
    const {username} = useContext(AppContext)
    return <h1>This is the Contact page and user is {username}</h1>
}