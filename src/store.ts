import {configureStore, createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice(
    {
        name:"user",
        initialSate:{value: {username: ""}},
        
    }
)



// export const store = configureStore({});