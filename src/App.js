import React, { useEffect } from 'react';
import './App.css';
import Axios from "axios"
import {useState}from "react";
// import {Text} from "./Utils"


const App = () => {
  // fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
  // console.log(data);
  // });
  const [name,setName] = useState("")
  const [predictedAge,SetPredictedAge] = useState(null);
  const fetchData = ()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>
    {SetPredictedAge(res.data) || console.log(res.data)})
  };

  useEffect(()=>{
    fetchData();}
    ,[]
    );

  return <div className='App'>
          <input placeholder="Ex. Pedro..." onChange={(event)=>{setName(event.target.value)}}/>
          <button onClick={fetchData}>
              Predict Age
            </button>
           <h1>Predicted Name: {predictedAge?.name}</h1>
           <h1>Predicted Age: {predictedAge?.age}</h1>
           <h1>Predicted Count: {predictedAge?.count}</h1>

          </div>
  };

export default App