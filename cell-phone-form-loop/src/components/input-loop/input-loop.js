import { useState } from "react";
import  "./input-loop.scss";

function InputLoop ({type,item,onChange}){

    const[inputValue,setInputValue]= useState('');
    const handleChange = (event) =>{
        setInputValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div className="input-container">
            <div><span>{item.label}</span></div>
            <input type={type} id={item.id} name={item.id} value={inputValue} onChange={handleChange}/>
        </div>);
}

export default InputLoop;