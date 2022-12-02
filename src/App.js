import './App.css';
import {useState} from "react" 
// import {User} from './User'
// import {Planets} from './Utils';


const App = () => {

  const [age,setAge] = useState(0);
  
  const IncreaseAge = () =>{
    setAge(age + 1);
  };
  return <div className='App'>
      {age}
      <button onClick={IncreaseAge}>Increase Age</button>
         </div>
  
};


export default App