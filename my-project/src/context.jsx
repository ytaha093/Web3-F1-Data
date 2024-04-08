import { useState, createContext } from 'react';

export const AppContext = createContext(); 
 
export const TheContext =  ({children}) => {

  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [raceData, setraceData] = useState([]);
  const [raceID, setraceID] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const [standingData, setStandingData] = useState([]);
  const [qData, setQData] = useState([]);
  const [year, setYear] = useState(2000);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setRData]= useState([]);

  return (
    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, raceData, setraceData, year, setYear, seasonData, setSeasonData, standingData, setStandingData, qData, setQData, raceID, setraceID, showResult, setShowResult, resultData, setRData}}>
      {children}
    </AppContext.Provider>
  )
  
}