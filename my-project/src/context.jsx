import { useState, createContext } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const AppContext = createContext(); 
 
export const TheContext =  ({children}) => {

  const supabase = createClient(supabaseUrl, supabaseKey);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, supabase, data, setData}}>
      {children}
    </AppContext.Provider>
  )
  
}