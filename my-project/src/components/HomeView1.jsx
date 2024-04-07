import React from 'react'
import { useContext } from "react";
import { AppContext } from "../context.jsx";
import SideBar from './RacesSideBar.jsx';
import Header from './Header.jsx';
import { useState } from 'react';

export const HomeView1 = () => {


  const [year, setYear] = useState(2024)
  const [selected, setSelected] = useState("results")
  const [race, setRace] = useState(null)
  // Use context for favorates





  return (
    <div className="flex w-screen h-screen flex-wrap justify-around content-around">
      <div className="border-2 bg-white shadow-md rounded-md h-[11%] w-[97%] overflow-auto">
        <Header />
      </div>
      < div className="border-2 bg-white shadow-md rounded-md h-[85%] w-[25%] overflow-auto" >
        <SideBar />
      </div >
      <div className="border-2 bg-white shadow-md rounded-md h-[85%] w-[70%] overflow-auto">

      </div>
    </div>
    // <div>header</div>
    // <div>SideBar</div> 
    // <div>TheRest</div>
  );
}

export default HomeView1;