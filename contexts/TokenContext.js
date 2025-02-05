import { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const useToken = () => useContext(TokenContext);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};