import { useState } from 'react';
export const useCount = ()=>{
    const [state, setState] = useState(0);
    const changValue = (data) =>{
        if (data ==="increase") {
            setState(state+1);
          } else if (data ==="decrease") {
            setState(state-1);
          } else { setState(0);
          }
    }
    return [state,changValue]
}
