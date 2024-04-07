import { useState, createContext } from 'react';

export const AppContext = createContext(); 
 
export const TheContext =  ({children}) => {

  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [raceData, setraceData] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const [year, setYear] = useState(2000)

  return (
    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, raceData, setraceData, year, setYear, seasonData, setSeasonData}}>
      {children}
    </AppContext.Provider>
  )
  
}