import "../SideBar.css"; // Import custom CSS file for scrollbar styling
import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context.jsx";

const Results = (props) => {
  const { standingData, setStandingData } = useContext(AppContext);
  const { qData, setQData } = useContext(AppContext);
  const { raceID } = useContext(AppContext);
  const { resultData, setRData } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await props.supabase
          .from("qualifying")
          .select(
            "qualifyId, number, position, q1, q2, q3, races(*), drivers(*), constructors(*)"
          )
          .eq("raceId", raceID)
          .order("position", { ascending: true });

        if (error) {
          throw error;
        }

        setQData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [raceID]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await props.supabase
          .from("results")
          .select(
            " *, drivers (*), races (*), constructors (*)"
          )
          .eq("raceId", raceID)
          .order("position", { ascending: true });

        if (error) {
          throw error;
        }
        setRData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [raceID]);

  function handleNull(value) {
    if (value == null || value.length === 0) {
      return "DNF";
    } else {
      return value;
    }
  }

  function medal(position) {
    switch (position) {
      case 1:
        position = position + "🥇";
        break;
      case 2:
        position = position + "🥈";
        break;
      case 3:
        position = position + "🥉";
        break;
    }

    return position;
  }

  return (
    <div className="mr-[5%] ml-[2%] flex justify-right h-[83vh] w-[58%] border-2 bg-white shadow-md rounded-md border-black px-2">
      <div className="w-full h-full flex flex-col">
        <h1 className="text-3xl pt-2 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
          Races
        </h1>

        <div className=" text-center">
          Race Name, Round #, Year,{" "}
          <span className=" underline hover:cursor-pointer">Circuit Name</span>,
          Date, URL
        </div>
        <div className="flex gap-2 h-full mt-1 overflow-hidden">
          <div className="w-7/12 border-t-2 flex flex-col h-full">
            <h1 className="text-xl pt-1 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
              Qualifying
            </h1>
            <div className="table-container h-full">
              <table className="w-full">
                <thead className="sticky top-0 bg-gray-200 z-50">
                  <tr>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Pos
                    </th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold"></th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold"></th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Q1
                    </th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Q2
                    </th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Q3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {qData.map((q) => (
                    <tr
                      key={q.qualifyId}
                      className="border-b hover:bg-gray-100"
                    >
                      <td className="pl-1 py-2">{q.position}</td>
                      <td className="pl-1 py-2">
                        <span className=" underline hover:cursor-pointer">
                          {q.drivers.forename} {q.drivers.surname}
                        </span>
                      </td>
                      <td className="pl-1 py-2">
                        <span className=" underline hover:cursor-pointer">
                          {q.constructors.name}
                        </span>
                      </td>
                      <td className="pl-1 py-2">{handleNull(q.q1)}</td>
                      <td className="pl-1 py-2">{handleNull(q.q2)}</td>
                      <td className="pl-1 py-2">{handleNull(q.q3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-7/12 border-t-2 flex flex-col h-full">
            <h1 className="text-xl pt-1 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
              Results
            </h1>
            <div className="table-container h-full">
              <table className="w-full">
                <thead className="sticky top-0 bg-gray-200 z-50">
                  <tr>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Pos
                    </th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold"></th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold"></th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Laps
                    </th>
                    <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                      Pts
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resultData.map((result) => (
                    <tr
                      key={result.resultId}
                      className="border-b hover:bg-gray-100"
                    >
                      <td className="pl-1 py-2">{medal(result.position)}</td>
                      <td className="pl-1 py-2">
                        <span className=" underline hover:cursor-pointer">
                          {result.drivers.forename} {result.drivers.surname}
                        </span>
                      </td>
                      <td className="pl-1 py-2">
                        <span className=" underline hover:cursor-pointer">
                          {result.constructors.name}
                        </span>
                      </td>
                      <td className="pl-1 py-2">{result.laps}</td>
                      <td className="pl-1 py-2">{result.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
