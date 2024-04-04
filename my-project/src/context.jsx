import { useState, createContext } from 'react';

export const AppContext = createContext(); 
 
export const TheContext =  ({children}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </AppContext.Provider>
  )
  
}