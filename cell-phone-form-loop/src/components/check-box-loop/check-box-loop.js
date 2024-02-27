
import { useState } from "react";
import "./check-box-loop.scss";
function CheckBoxLoop ({item,onChange}){

    const [value,setValue]=useState(null);
    const handleCheck = (bool) =>{
        setValue(bool);
        onChange(bool);
    };

return (
    <div className="check-box-container">
        <div className={"check" + (value ?' selected':'')} onClick={()=>handleCheck(true)}></div>
        <div><span>{item.label}</span></div>
         
    </div>);
}
export default CheckBoxLoop;