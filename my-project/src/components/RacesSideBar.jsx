import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context.jsx";
import "../SideBar.css"; // Import custom CSS file for scrollbar styling

const SideBar = (props) => {
  const { data, setData, supabase } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("races").select("*");

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
    <div className="flex justify-left h-fill w-full">
      <div className="bg-whiteborder max-h-full overflow-y-auto">
        <h1 className="text-3xl px-4 py-3 text-center text-gray-700 uppercase tracking-wider font-semibold">Races</h1>
        <div className="table-container">
          <table className="w-full">
            <thead className="sticky top-0 bg-gray-200 z-50">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700 uppercase tracking-wider font-semibold">
                  Round
                </th>
                <th className="px-4 py-3 text-left text-gray-700 uppercase tracking-wider font-semibold">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-gray-700 uppercase tracking-wider font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((race) => (
                <tr key={race.raceId} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{race.raceId}</td>
                  <td className="px-4 py-2">{race.name}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      type="button"
                      className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Results
                    </button>
                    <button
                      type="button"
                      className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Standings
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
