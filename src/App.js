import React from 'react';
import './App.css';
// import Axios from "axios"
import {createContext }from "react";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './pages/Navbar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


export const AppContext = createContext();

const App = () => {

  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    }
  }});

  return (
  <div className='App'>

          <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </Router>
          </QueryClientProvider>
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