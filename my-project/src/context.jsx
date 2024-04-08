import { useState, createContext } from 'react';

export const AppContext = createContext();

export const TheContext = ({ children }) => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [raceData, setraceData] = useState([]);
  const [selectedRace, setSelectedRace] = useState([]);
  const [raceID, setraceID] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const [conStanding, setConStanding] = useState([]);
  const [driverStanding, setDriverStanding] = useState([]);
  const [qData, setQData] = useState([]);
  const [year, setYear] = useState(2000);
  const [showResult, setShowResult] = useState(false);
  const [showStanding, setShowStanding] = useState(false);
  const [showCard, setshowCard] = useState(false);
  const [resultData, setRData] = useState([]);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, raceData, setraceData, year, setYear, seasonData, setSeasonData, conStanding, driverStanding, setDriverStanding, setConStanding, qData, setQData, raceID, setraceID, selectedRace, setSelectedRace, showResult, setShowResult, showCard, setshowCard, resultData, setRData, showStanding, setShowStanding }}>
      {children}
    </AppContext.Provider>
  )

}