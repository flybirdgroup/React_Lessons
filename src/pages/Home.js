// import React from "react";
// import { useContext } from "react";
// import { AppContext } from "../App";
import { useDispatch,useSelector } from "react-redux";

export const Home =() =>{
    // const {username} = useContext(AppContext)
    const username = useSelector((state)=>state.user.value.username)
    return <h1>This is the {username} home page and user </h1>
}