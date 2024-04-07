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
        <div className="h-[16vh] w-screen flex justify-center items-center">
            <div className="border-2 bg-white shadow-md rounded-md px-2 border-black w-[90%] h-[80%] flex justify-between items-center text-xl">
                <div className="w-1/5 pl-6">
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
                <div className="w-1/5 flex justify-center items-center gap-6">
                    <button
                        type="button"
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Favorites
                    </button>
                    <button
                        type="button"
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        About
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
