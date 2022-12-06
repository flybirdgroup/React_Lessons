import React from 'react';
import './App.css';
// import Axios from "axios"
// import {useState, createContext }from "react";
import { Form } from './components/Form';
// import {Text} from "./Utils"


// export const AppContext = createContext();

const App = () => {
  // const [username, setUsername] = useState("Michael");

  return (<div className='App'>
          <Form />
          </div>
          )
  };

export default App



// const TopComponent = () => {
//   const [state,setState] =useState();
//   return (
//     <div>
//       <MiddleComponent state={state} />
//     </div>
//   );
// };

// const MiddleComponent = (state) => {
//   return (
//     <div>
//       <BottomComponent state={state} />
//     </div>
//   );
// };

// const BottomComponent = (state) =>{
//   return <div>{state}</div>;
// };