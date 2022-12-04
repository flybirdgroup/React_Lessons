import React from 'react';
import './App.css';
import Axios from "axios"
import {useState, useEffect }from "react";
// import {Text} from "./Utils"


const App = () => {
  // fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
  // console.log(data);
  // });
  const [name,setName] = useState("")
  // const [predictedAge,SetPredictedAge] = useState('');

  const fetchData = (name)=>{
    Axios.get(`https://uselessfacts.jsph.pl/${name}.json`).then((res)=>
    {console.log(res.data) || setName(res.data.text)})
  };


  useEffect(()=>{
    fetchData();}
    ,[]
    );

  return <div className='App'>
          <h1>Generate Exerise</h1>
          <button onClick={() =>fetchData('random')}>
              Party
            </button>
            <button onClick={() =>fetchData('today')}>
              Family
            </button>
            <button onClick={() =>fetchData('random')}>
              Office
            </button>
          <p>{name}</p>
          </div>
  };

export default App