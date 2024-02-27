import { useContext } from 'react';
import ProtocolContext from './protocol-loop-api';

function useProtocolContext() {
  return useContext(ProtocolContext);
}

export default useProtocolContext;