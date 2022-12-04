import React, { useEffect } from 'react';
import './App.css';
import Axios from "axios"
import {useState}from "react";
// import {Text} from "./Utils"


const App = () => {
  // fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
  // console.log(data);
  // });
  const fetchCatFact = ()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{setCatFact(res.data.fact)})
  };

  const [catFact,setCatFact] = useState("")
  useEffect(()=>{
    fetchCatFact();}
    ,[]
    );

  return <div className='App'>
          <button onClick={fetchCatFact}>
              Generate Cat Fact
            </button>
           <p>{catFact}</p>
          </div>
  };

export default App