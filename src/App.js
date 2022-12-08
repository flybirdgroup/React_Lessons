// import React, { useState } from 'react';
import './App.css';
import { Cat } from './components/Cat';
import { Count } from './components/Count';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Axios from "axios"
// import {useState }from "react";
// import { Form } from './components/Form';
// import {Text} from "./Utils"



// export const AppContext = createContext();

const App = () => {
  // const [isVisible, toggle] = useToogle(false);
  
  const client = new QueryClient(
    {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        },
      },
    }
  );
  const visible = false ;

  

  return (
  <div className='App'>
    <QueryClientProvider client={client}>
          {visible && <Cat />}

          {!visible && <Count />}
          </QueryClientProvider>
          </div>
          )
  };

export default App
