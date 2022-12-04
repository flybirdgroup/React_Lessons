import React from 'react';
import './App.css';
import {useState}from "react";
import {Text} from "./Utils"


const App = () => {
  const [showText,setShowText] = useState(false)
  
  // useEffect(()=>{
  //   console.log("Component mounted")
  // })

  return <div className='App'>
          <button
            onClick={()=>{
              setShowText(!showText);
            }}
            >
              Show Text
            </button>
            {showText && <Text />}
          </div>
  };

export default App