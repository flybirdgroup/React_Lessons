import { useState } from "react";

interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: Props["name"][];
    country?: Country;
}

export enum Country {
    Brazil = "Brazil",
    Canada = "Canda",
    France = "France",
}

export const Person = (props:Props) =>{
    // const [name,setName] = useState<String>("");

    return (
        <div>
            <h1>Name: {props?.name}</h1>
            <h1>Email: {props?.email}</h1>
            <h1>Age: {props?.age}</h1>
            <h1>This Person {props?.isMarried? "is":"is not"} married</h1>
            {props?.friends.map((friend)=>(
                <h1>{friend}</h1>
            ))}
            <h1>This Person is from {props.country}</h1>
        </div>
    )

}