import { createContext, useContext } from 'react';

const TokenContext = createContext();

export const useToken = () => useContext(TokenContext);

export default TokenContext;
