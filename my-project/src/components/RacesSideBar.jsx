import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context.jsx";
import { GiCheckeredFlag } from "react-icons/gi";
import { GiRaceCar } from "react-icons/gi";
import "../SideBar.css"; // Import custom CSS file for scrollbar styling

const SideBar = (props) => {
  const { raceData, setraceData } = useContext(AppContext);
  const { year } = useContext(AppContext);
  const { setraceID } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await props.supabase
          .from("races")
          .select("*")
          .eq("year", year)
          .order("round", { ascending: true });

        if (error) {
          throw error;
        }

        setraceData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [year]);

  return (
    <div className="ml-[5%] flex justify-left h-[83vh] min-w-[30%] border-2 bg-white shadow-xl rounded-md border-gray-200 p-4">
      <div className="max-h-full w-full overflow-y-auto flex flex-col">
        <h1 className="text-3xl text-center text-gray-700 uppercase tracking-wider font-semibold mb-4">
          Races
        </h1>
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
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {raceData.map((race) => (
                <tr key={race.raceId} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{race.round}</td>
                  <td className="px-4 py-2">{race.name}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      type="button"
                      className="flex items-center bg-gray-600 hover:bg-red-800 text-white py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Results <GiCheckeredFlag className="ml-1" />
                    </button>
                    <button
                      type="button"
                      className="flex items-center bg-gray-600 hover:bg-indigo-800 text-white py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Standings <GiRaceCar className="ml-1" />
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
