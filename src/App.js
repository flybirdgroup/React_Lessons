import React from 'react';
import './App.css';
// import Axios from "axios"
// import {useState }from "react";
// import { Form } from './components/Form';
// import {Text} from "./Utils"
import {useToogle} from "./useToggle"


// export const AppContext = createContext();

const App = () => {
  const [isVisible, toggle] = useToogle(false);
  const [isVisible2, toggle2] = useToogle(false);

  return (<div className='App'>
          <button onClick={toggle}>
            {isVisible ? "Hide":"Show"}
          </button>
          {isVisible && <h1>Hidden Text</h1>}
          <p></p>

          <button onClick={toggle2}>
            {isVisible2 ? "Hide":"Show"}
          </button>
          {isVisible2 && <h1>Hidden Text</h1>}
          </div>
          )
  };

export default App
