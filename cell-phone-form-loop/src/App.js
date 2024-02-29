import { useEffect, useContext, useState } from 'react';
import FormLoop from './pages/form-loop/form-loop';
import ProtocolContext from './contexts/protocol-loop/protocol-loop-api';
import './App.scss';

function App() {
  const { fetchProtocol } = useContext(ProtocolContext);
  const [form,setForm]=useState([]);
  const [result,setResult]=useState(false);
  const [state,setState]=useState(false);
  const getForm=(event)=>{
    setForm(event);
    setResult(true);
    const invalid = event.filter(field => field.value.deal_breaker);
    setState(invalid.length > 0);
  }

  useEffect(() => {
    fetchProtocol();
  }, [fetchProtocol,result,state]);

  const verifyDealBreaker = (isDealBreaker) =>{
    if(isDealBreaker){
      return ' error';
    }
    return '';
  };
  const fieldValuesResult = form?.map((field)=>{
      return (<div key={field.id} className={'result-value' + verifyDealBreaker(field.value.deal_breaker)}>
                <div>{field.id+ ' - ' +field.label}</div>
                <div>{field.value.label}</div>
              </div>);
    });
  
  
   
return (
    <section className="app-container">
      <FormLoop onChange={(e)=>getForm(e)}/>
      {result && 
      (<div className={"info-window" + (state?' error':'')} >
        <button onClick={()=>setResult(false)}>close</button>
        {fieldValuesResult}
      </div>)}
    </section>
  );
}

export default App;
