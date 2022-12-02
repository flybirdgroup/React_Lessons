import './App.css';
// import {User} from './User'
import {Planets} from './Utils';


const App = () => {
  const planets =[
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true}
  ]

  return <div className='App'>
          {planets.map(
            (planet) =>{
              return <Planets isGasPlanet={planet.isGasPlanet} name={planet.name} />;
            }
          )}
         </div>
  
};


export default App