import React from 'react'
import { useContext } from "react";
import { AppContext } from "../context.jsx";
import SideBar from './RacesSideBar.jsx';
import Header from './Header.jsx';

export const HomeView1 = () => {


  const [year, setYear] = useState(2024)
  const [selected, setSelected] = useState("results")
  const [race, setRace] = useState(null)
  // Use context for favorates





  return (
    <div className="flex w-screen h-screen flex-wrap flex-col justify-evenly content-around">
      < div className="border-2 bg-white shadow-md rounded-md h-[94%] w-[27%]" >
        <SideBar />
      </div >
      <div className="border-2 bg-white shadow-md rounded-md h-[11%] w-[70%]">
        <Header />
      </div>
      <div className="border-2 bg-white shadow-md rounded-md h-[80%] w-[70%]">

      </div>
    </div>
    // <div>header</div>
    // <div>SideBar</div>
    // <div>TheRest</div>
  );
}

export default HomeView1;