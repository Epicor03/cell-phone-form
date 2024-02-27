import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const ProtocolContext = createContext();

function Provider({ children }) {
  const [protocol, setProtocol] = useState([]);


  const fetchProtocol = useCallback(async () => {
    const response = await axios.get('https://pedromareis.github.io/fe-loopos-challenge/protocol.json');

    setProtocol(response.data);
  },[]);

  const valueToShare = {
    protocol,
    fetchProtocol
  };

  return (
    <ProtocolContext.Provider value={valueToShare}>
      {children}
    </ProtocolContext.Provider>
  );
}
export { Provider };
export default ProtocolContext;