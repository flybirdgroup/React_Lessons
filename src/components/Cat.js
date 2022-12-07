import { useGetCat } from "../useGetCat";

export const Cat = () => {
    const {data,refetchData,isLoading} = useGetCat();
    if (isLoading) return <h1>Loading........</h1>;
    return (
        <div>
            <button onClick={refetchData}>refetch data</button>
            <h1>{data?.fact}</h1>
        </div>
    )
}