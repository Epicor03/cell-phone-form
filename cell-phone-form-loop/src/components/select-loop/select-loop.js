import { useState } from "react";
import "./select-loop.scss";

function SelectLoop ({item,selected,onChange}){
   
   //--------DROPDOWN SELECT-------------------//
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);
    
    const handleClickDropdown=()=>{
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) =>{
        setIsDropdownOpen(!isDropdownOpen);
        onChange(option);
    };

    const handleErrorMessage=() =>{

        if(selected?.deal_breaker){
          return  <div className="error"><span>esta opção é um deal breaker</span></div>;
        }
        return'';
    }

    const dropdownSelect = (item) =>{
       const optionsList = item.options.map((option) => {
            return <div className={"dropdown-option" + (option.id === selected?.id?" selected":"")} key={option.id}  onClick={() =>handleOptionClick(option)}>
                        <span>{option.label}</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
        });
        
       return (
            <div className="select-drop-content">
                <div className={"select-drop-value" +(selected?' has-value':'')} onClick={handleClickDropdown}>
                    <span>{selected?.label || 'select'}</span>
                    </div>
                {isDropdownOpen && <div className="select-drop-dropdown">{optionsList}</div>}
            </div>);
     };

     //---------------------------------------------//

     //--------NO DROPDOWN SELECT-------------------//
     const isSelected = (id) =>{
        if(selected?.id === id){
            return ' selected';
        } else {
            return '';
        }
     };
     const noDropdownSelect= (item) => {
        const optionsList = item.options.map((option) => {
           return <div key={option.id} className={"no-dropdown-option" + isSelected(option.id)} onClick={() =>handleOptionClick(option)}>{option.label}</div>
        });

        return (
            <div className="no-dropdown-select-content">{optionsList}</div>
        );
     };
    
    //---------------------------------------------//

    let content;
    if(item.dropdown){
        content = dropdownSelect(item);
    } else {
        content = noDropdownSelect(item);
    }
    return (
        <div>
            <div key={item.id} className="select-container">
                <div className="select-loop-header">{item.label}</div>
                {content}
                {handleErrorMessage()}
            </div>
        </div>
    );
}

export default SelectLoop;