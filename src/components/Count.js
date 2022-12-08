import { useCount } from "../useCount";
export const Count = ()=> {
    const [data,changeValue] = useCount();
    return (
    <div>
    <button onClick={()=>{changeValue("increase")}}>increase</button>
    <button onClick={()=>{changeValue("decrease")}}>decrease</button>
    <button onClick={()=>{changeValue("restart")}}>restart</button>
    {data}
    </div>)
};