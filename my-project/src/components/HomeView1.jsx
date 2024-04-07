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
    // <div className="flex w-screen h-screen p-4 flex-wrap justify-between content-around">
    //   <div className="border-2 bg-white shadow-md rounded-md h-[11%] w-screen">
    //     <Header />
    //   </div>
    //   < div className="border-2 bg-white shadow-md rounded-md h-[85%] w-[28%]" >
    //     <SideBar />
    //   </div >
    //   <div className="border-2 bg-white shadow-md rounded-md h-[85%] w-[71%]">

    //   </div>
    // </div>
    // <div>header</div>
    // <div>SideBar</div> 
    // <div>TheRest</div>
    <>
      <Header />

      <SideBar />

    </>
  );
}

export default HomeView1;