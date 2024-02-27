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

    const dropdownSelect = (item) =>{
       const optionsList = item.options.map((option) => {
            return <div className="dropdown-option" key={option.id} onClick={() =>handleOptionClick(option)}>{option.label}</div>
        });
        
       return (
            <div className="select-drop-content">
                <div className={"select-drop-value" +(selected?' has-value':'')} onClick={handleClickDropdown}><span>{selected?.label || 'select'}</span></div>
                {isDropdownOpen && <div className="select-drop-dropdown">{optionsList}</div>}
            </div>);
     };

     //--------DROPDOWN SELECT-------------------//

     //--------NO DROPDOWN SELECT-------------------//
     const isSelected = (id) =>{
        if(selected?.id === id){
            return 'selected';
        } else {
            return '';
        }
     };
     const noDropdownSelect= (item) => {
        const optionsList = item.options.map((option) => {
           return <div className={"no-dropdown-option " + isSelected(option.id)} key={option.id} onClick={() =>handleOptionClick(option)}>{option.label}</div>
        });

        return (
            <div className="no-dropdown-select-content">{optionsList}</div>
        );
     };
    
    let content;
    if(item.dropdown){
        content = dropdownSelect(item);
    } else {
        content = noDropdownSelect(item);
    }
    return (
        <div>
            <div className="select-container">
                <div className="select-loop-header">{item.label}</div>
                {content}
            </div>
        </div>
    );
}

export default SelectLoop;