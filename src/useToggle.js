// useName, highlevel, inside hook component
// a hook is a function to allow you to abstract logic & a hook can use life cycle and state
// hook not for ui logic but return state logic
import {useState }from "react";

export const useToogle = (initialVal = false) => {
    const [state,setState] = useState(initialVal);
    const toogle = () =>{
        setState(!state);
    }
    return [state, toogle];
};