import './App.css';
import { useState } from "react" ;
// import {User} from './User'
// import {Planets} from './Utils';

const App = () => {

  const [count, setCount] = useState(0);

  return (
        <div className="App">
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
        <button onClick={()=>{setCount(0)}}>Set to Zero</button>
        {count}
         </div>
         );
  
}
export default App