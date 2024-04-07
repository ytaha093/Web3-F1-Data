import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context.jsx";

const Header = (props) => {
  const { setYear } = useContext(AppContext);
  const { seasonData, setSeasonData } = useContext(AppContext);

  const handleChange = (e) => {
    setYear(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await props.supabase
          .from("seasons")
          .select("*")
          .gte("year", 2000)
          .lte("year", 2023)
          .order("year", { ascending: true });

        if (error) {
          throw error;
        }

        setSeasonData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex justify-between items-center text-xl">
      <div className="w-1/5">
        <label htmlFor="year">Season: </label>
        <select
          name="year"
          className="w-1/3 border-2 border-gray-400 rounded"
          onChange={handleChange}
        >
          {seasonData.map((season, index) => (
              <option key={index} value={season.year}>{season.year}</option>
          ))}
        </select>
      </div>
      <div className="flex font-bold text-2xl">F1 Dashboard</div>
      <div className="w-1/5 flex justify-evenly items-center">
        <button
          type="button"
          className="bg-stone-400 hover:bg-stone-600 text-white py-2 px-4 rounded-2xl w-1/2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 w-[45%]"
        >
          Favorites
        </button>
        <button
          type="button"
          className="bg-stone-400 hover:bg-stone-600 text-white py-2 px-4 rounded-2xl w-1/2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 w-[40%]"
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Header;
