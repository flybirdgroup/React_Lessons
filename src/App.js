import React from 'react';
import './App.css';
import { Cat } from './components/Cat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Axios from "axios"
// import {useState }from "react";
// import { Form } from './components/Form';
// import {Text} from "./Utils"
// import {useToogle} from "./useToggle"


// export const AppContext = createContext();

const App = () => {
  // const [isVisible, toggle] = useToogle(false);
  // const [isVisible2, toggle2] = useToogle(false);
  const client = new QueryClient(
    {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        },
      },
    }
  );

  return (
  <div className='App'>
    <QueryClientProvider client={client}>
          <Cat />
          </QueryClientProvider>
          </div>
          )
  };

export default App
