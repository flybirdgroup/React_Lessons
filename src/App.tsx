import './App.css';
import { Person, Country } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name='michael' email='163.com' age={123} isMarried={true} friends={["derrick","ashley"]} country={Country.Brazil} />
    </div>
  );
}

export default App;
