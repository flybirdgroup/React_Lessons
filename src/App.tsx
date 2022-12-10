import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./page/Home"
import './App.css';
import { Person, Country } from './components/Person';

function App() {
  const visible = false;
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route>

        </Route>
      </Routes>
    </Router>
      { visible && <Person name='michael' email='163.com' age={123} isMarried={true} friends={["derrick","ashley"]} country={Country.Brazil} />}

    </div>
  );
}

export default App;
