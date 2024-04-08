import React from 'react'
import { useContext } from "react";
import { AppContext } from "../context.jsx";
import SideBar from './RacesSideBar.jsx';
import Header from './Header.jsx';
import Results from './Results.jsx';
import Standings from './Standings.jsx';
import { useState } from 'react';
import DriverPopup from './popups/DriverPopup.jsx';
import ContructorPopup from './popups/ContructorPopup.jsx';
import CircuitPopup from './popups/CircuitPopup.jsx';
import FavoritePopup from './popups/Favoratepopup.jsx';

export const HomeView1 = (props) => {
  const { showResult, showStanding, showCard } = useContext(AppContext);


  const displayMainCard = () => {
    if (showResult) return <Results supabase={props.supabase} />
    if (showStanding) return <Standings supabase={props.supabase} />
  }

  const displayMiniCard = () => {
    if (showCard == false) return
    if (showCard == "favorite") return <FavoritePopup supabase={props.supabase} />
    if (showCard == "circuit") return <CircuitPopup supabase={props.supabase} />
    if (showCard == "driver") return <DriverPopup supabase={props.supabase} />
    if (showCard == "contructor") return <ContructorPopup supabase={props.supabase} />
  }


  return (
    <div className="flex flex-wrap">
      <Header supabase={props.supabase} />
      <SideBar supabase={props.supabase} />
      {displayMainCard()}
      {displayMiniCard()}
    </div>
  );

}

export default HomeView1;