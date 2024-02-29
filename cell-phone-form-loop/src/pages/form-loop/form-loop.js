import { useContext, useState } from 'react';
import ProtocolContext from '../../contexts/protocol-loop/protocol-loop-api';
import SelectLoop from '../../components/select-loop/select-loop';
import InputLoop from '../../components/input-loop/input-loop';
import CheckBoxLoop from '../../components/check-box-loop/check-box-loop';
import './form-loop.scss';

function FormLoop ({onChange}){

  

  const { protocol } = useContext(ProtocolContext);
  const [formValues,setformValues]= useState([]);

  //----- Select methods--------//
  const handleSelection=(item,option)=>{
    let valuesSelectObj;
    const fieldRow = formValues.find((field)=>field.id === item.id);
    if(fieldRow){
      fieldRow.value = option;
      const removeOld= formValues.filter((value)=> value.id !== item.id);
      valuesSelectObj=[...removeOld,...[fieldRow]];
      setformValues(valuesSelectObj);
    } else{
      valuesSelectObj = [...formValues, ...[{id:item.id,label:item.label,type:item.type, value:option}]];
      setformValues(valuesSelectObj);
    }
  };

  const getSelectedValue = (id) => {
    const field = formValues.find((value) => value.id === id);
    return field?.value;
  };
  //----- Select methods--------//
  //----- Input methods --------//

  const handleInput = (item,value) =>{
    let valuesSelectObj;
    const fieldRow = formValues.find((field)=>field.id === item.id);

    if(fieldRow){
      fieldRow.value = value;
      const removeOld= formValues.filter((value)=> value.id !== item.id);
      valuesSelectObj=[...removeOld,...[fieldRow]];
      setformValues(valuesSelectObj);
    } else{
      valuesSelectObj = [...formValues, ...[{id:item.id,label:item.label,type:item.type, value}]];
      setformValues(valuesSelectObj);
    }

  };

  //----------------------------------//
  //----- CheckBox methods-------//
  const handleCheckBox = (item,value) => {
    let valuesSelectObj;
    const fieldRow = formValues.find((field)=>field.id === item.id);
    if(fieldRow){
      fieldRow.value = value;
      const removeOld= formValues.filter((formValue)=> formValue.id !== item.id);
      valuesSelectObj=[...removeOld,...[fieldRow]];
      setformValues(valuesSelectObj);
    } else{
      valuesSelectObj = [...formValues, ...[{id:item.id,label:item.label,type:item.type, value}]];
      setformValues(valuesSelectObj);
    }
    
  };
  //---------------------------------//
  const submitInfo= () =>{
    onChange(formValues);
  };

  const form = protocol.items?.map((item) => {
      if(item.type === "input:select"){
        return (
        <div key ={item.id} className="row">
          <SelectLoop  item={item} selected={getSelectedValue(item.id)} onChange={(e) => handleSelection(item, e)}/>
        </div>);
      } else if(item.type === "input:text" || item.type === 'input:number'){
          const type = item.type.split(':')
          return ( 
          <div key ={item.id}  className="row">
            <InputLoop type={type[1]} item={item} onChange={(e) => handleInput(item,e)}/>
          </div>);
      } else if(item.type === 'input:bool'){
          return (
            <div key ={item.id} className="row">
              <CheckBoxLoop  item={item} onChange={(e)=>handleCheckBox(item,e)}/>
            </div>);  
      }
      return'';
    });

  return (
    <section className="form-loop-container">
      <div>
      <h2>FormLoop</h2>
        {form}
      </div>
      <footer>
        <div><button onClick={submitInfo}>Submeter</button></div>
      </footer>
    </section>);
}

export default FormLoop;