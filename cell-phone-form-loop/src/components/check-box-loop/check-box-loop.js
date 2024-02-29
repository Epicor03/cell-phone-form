
import { useEffect , useState } from "react";
import "./check-box-loop.scss";

function CheckBoxLoop ({item,onChange}){
    const [value,setValue]=useState(null);
    useEffect(() => {
        handleErrorMessage();
      }, [value]);
    
    const handleCheck = (bool,dealBreaker) =>{
        setValue(bool);

        const checkBoxInfo ={value:bool,deal_breaker:(bool === (dealBreaker === 'true'))}
        onChange(checkBoxInfo);
        
    };

    const handleErrorMessage=()=>{
        if(value === (item.deal_breaker_values === 'true')){
            return <div className="error"><span>Esta opção é um deal breaker</span></div>
        }
        return '';
    
      }
  
return (
    <div className="check-box-container">
        <div className="check-box-content">
            <div className={"check" + (value ?' selected':'')} onClick={(e)=>handleCheck(!value,item.deal_breaker_values)}>
                {value?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>:''}
            </div>
            <div><span>{item.label}</span></div>
        </div>
        <div>{handleErrorMessage()}</div>
    </div>);
}
export default CheckBoxLoop;