import "../SideBar.css"; // Import custom CSS file for scrollbar styling
import { useEffect } from "react";

const Standings = () => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const { data, error } = await props.supabase
                //     .from("seasons")
                //     .select("*")
                //     .gte("year", 2000)
                //     .lte("year", 2023)
                //     .order("year", { ascending: true });

                // if (error) {
                //     throw error;
                // }

                // setSeasonData(data);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);



    return (
        <div className="mr-[5%] ml-[2%] flex justify-left h-[83vh] w-[58%] border-2 bg-white shadow-md rounded-md border-black px-2">
            <div className="w-full h-full flex flex-col">
                <h1 className="text-3xl pt-2 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
                    Standings
                </h1>

                <div className=" text-center">
                    After Round #
                </div>
                <div className="flex gap-2 h-full mt-1 overflow-hidden">

                    <div className="w-7/12 border-t-2 flex flex-col h-full">
                        <h1 className="text-xl pt-1 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
                            Drivers
                        </h1>
                        <div className="table-container h-full">

                            <table className="w-full">
                                <thead className="sticky top-0 bg-gray-200 z-50">
                                    <tr>
                                        <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                                            Pos
                                        </th>
                                        <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">

                                        </th>
                                        <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                                            Pts
                                        </th>
                                        <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                                            Wins
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={1} className="border-b hover:bg-gray-100">
                                        <td className="pl-1 py-2">1</td>
                                        <td className="pl-1 py-2">
                                            <span className=" underline hover:cursor-pointer">Mikal Joran</span>
                                        </td>
                                        <td className="pl-1 py-2">
                                            41
                                        </td>
                                        <td className="pl-1 py-2">
                                            4
                                        </td>
                                    </tr>
                                    <tr key={1} className="border-b hover:bg-gray-100">
                                        <td className="pl-1 py-2">2</td>
                                        <td className="pl-1 py-2">
                                            <span className=" underline hover:cursor-pointer">Mikal Joran</span>
                                        </td>
                                        <td className="pl-1 py-2">
                                            40
                                        </td>
                                        <td className="pl-1 py-2">
                                            2
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>




                    <div className="w-7/12 border-t-2 flex flex-col h-full">
                        <h1 className="text-xl pt-1 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
                            Constructors
                        </h1>
                        <div className="table-container h-full">

                            <table className="w-full">
                                <thead className="sticky top-0 bg-gray-200 z-50">
                                    <tr>
                                        <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                                            Pos
                                        </th>
                                        <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">

                                        </th>
                                        <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                                            Pts
                                        </th>
                                        <th className="pl-1 py-2 text-left text-gray-700 uppercase tracking-wider font-semibold">
                                            Wins
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={2} className="border-b hover:bg-gray-100">
                                        <td className="pl-1 py-2">1</td>
                                        <td className="pl-1 py-2">
                                            <span className=" underline hover:cursor-pointer">Red Ball</span>
                                        </td>
                                        <td className="pl-1 py-2">
                                            27
                                        </td>
                                        <td className="pl-1 py-2">
                                            5
                                        </td>
                                    </tr>
                                    <tr key={3} className="border-b hover:bg-gray-100">
                                        <td className="pl-1 py-2">2</td>
                                        <td className="pl-1 py-2">
                                            <span className=" underline hover:cursor-pointer">Ford</span>
                                        </td>
                                        <td className="pl-1 py-2">
                                            24
                                        </td>
                                        <td className="pl-1 py-2">
                                            2
                                        </td>
                                    </tr>
                                    <tr key={4} className="border-b hover:bg-gray-100">
                                        <td className="pl-1 py-2">3</td>
                                        <td className="pl-1 py-2">
                                            <span className=" underline hover:cursor-pointer">ISIS</span>
                                        </td>
                                        <td className="pl-1 py-2">
                                            22
                                        </td>
                                        <td className="pl-1 py-2">
                                            0
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Standings