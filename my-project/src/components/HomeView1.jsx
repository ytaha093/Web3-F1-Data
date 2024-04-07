import React from 'react'
import { useContext } from "react";
import { AppContext } from "../context.jsx";
import SideBar from './RacesSideBar.jsx';
import Header from './Header.jsx';
import { useState } from 'react';

export const HomeView1 = (props) => {


  const [year, setYear] = useState(2024)
  const [selected, setSelected] = useState("results")
  const [race, setRace] = useState(null)
  // Use context for favorates





  return (
    <>
      <Header supabase={props.supabase} />
      <SideBar supabase={props.supabase} />
    </>
  );
}

export default HomeView1;