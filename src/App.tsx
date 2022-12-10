import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {Login} from "./pages/Login"
import './App.css';
import { Person, Country } from './components/Person';
import {Provider} from "react-redux"
import {store} from "./store"

function App() {
  const visible = false;

  return (
    <div className="App">
    <Provider store={store}>
    <Router>
      <Link to="/">Home Page </Link>
      <Link to="/login">Login Page </Link>
      <Link to="/contact">Contact Page </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
      { visible && <Person name='michael' email='163.com' age={123} isMarried={true} friends={["derrick","ashley"]} country={Country.Brazil} />}
      </Provider>
    </div>
  );
}

export default App;
