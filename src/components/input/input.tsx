import React,{FunctionComponent} from 'react'

export interface InputProps {
    name:string;
    age:number
} 
export const Input: FunctionComponent<Partial<InputProps>> = () =>{
    return <div>
        <input type="text" />
    </div>
}
