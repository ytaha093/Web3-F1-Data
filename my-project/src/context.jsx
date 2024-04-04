import { useState, createContext } from 'react';


// create the context object which will hold the favorite state 
export const AppContext = createContext(); 
 

export const TheContext =  ({children}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log("user is logged is" + isLoggedIn)
    setIsLoggedIn(true);
    console.log("user is logged is" + isLoggedIn)
  };
 
  return (
      <AppContext.Provider>
        {children}
      </AppContext.Provider>
  )
  
}