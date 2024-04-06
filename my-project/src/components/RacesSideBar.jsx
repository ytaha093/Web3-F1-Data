import React, { useState, useEffect } from "react";
import {useContext} from "react";
import {AppContext} from "../context.jsx";

const SideBar = (props) => {
  const {data, setData, supabase} = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data, error } = await supabase
          .from("races")
          .select("*");
        
        if (error) {
          throw error;
        }

        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <div className="min-w-96 p-4 border-8 border-black rounded-lg">
        <h1 className="text-lg font-bold mb-4">[Year] Races</h1>
        <ul>
          {data.map((race) => (
            <li key={race.raceId} className="m-4 flex flex-row">
              <span className="font-semibold">Race ID:</span> {race.raceId}
              <span className="ml-2 font-semibold">Name:</span> {race.name}
              <div className="w-4"></div>
              <div className="flex flex-row">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-1/2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Results
                </button>
                <div className="w-4"></div>
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-1/2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Standings
                </button>
              </div>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
