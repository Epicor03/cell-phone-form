import { useEffect, useContext } from 'react';
import FormLoop from './pages/form-loop/form-loop';
import ProtocolContext from './contexts/protocol-loop/protocol-loop-api';
import './App.scss';

function App() {
  const { fetchProtocol } = useContext(ProtocolContext);

  useEffect(() => {
    fetchProtocol();
  }, [fetchProtocol]);

  return (
    <section className="app-container">
      <FormLoop/>
    </section>
  );
}

export default App;
