import React from 'react'
import { useContext } from "react";
import { AppContext } from "../context.jsx";
import SideBar from './RacesSideBar.jsx';
import Header from './Header.jsx';
import Results from './Results.jsx';
import Standings from './Standings.jsx';

import { useState } from 'react';

export const HomeView1 = (props) => {

  return (
    <div className="flex flex-wrap">
      <Header supabase={props.supabase} />
      <SideBar supabase={props.supabase} />
      {/* <Results supabase={props.supabase} /> */}
      <Standings supabase={props.supabase} />
    </div>
  );
}

export default HomeView1;