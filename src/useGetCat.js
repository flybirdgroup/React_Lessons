import Axios from "axios"
// import { useQuery } from 'react-query';
import { useQuery } from '@tanstack/react-query';

export const useGetCat = () =>{
    const {
        data, 
        refetch,
        isLoading,
        error
        } = useQuery(
        ['cat'], async()=>{ return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);}
      );
    
    const refetchData = () =>{
        alert("data refetched");
        refetch()
    }

    if (error) {console.log(error)};

    return {data,refetchData,isLoading,error}
};