import { useCount } from "../useCount";
export const Count = ()=> {
    const [count,increase,decrease,restart] = useCount();
    return (
    <div>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
    <button onClick={restart}>restart</button>
    {count}
    </div>)
};