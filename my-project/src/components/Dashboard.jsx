import { useState } from "react"
import Header from "./Header"
import SideBar from "./RacesSideBar"

const Dashboard = () => {

    const [year, setYear] = useState(2024)
    const [selected, setSelected] = useState("results")
    const [race, setRace] = useState(null)
    // Use context for favorates



    return (
        <div className="bg-center w-screen h-screen bg-cover bg-[url('/f1-2.jpg')] flex justify-center items-center">
            <div className="w-11/12 h-[90%] bg-slate-100 opacity-90 border-2 border-black rounded flex flex-wrap justify-between content-between">
                <div className="w-full h-[11%] border-b-2 border-black">
                    <Header year={setYear} />
                </div>
                <div className="w-[27%] h-[89%] ">

                </div>
                <div className="w-[73%] h-[89%] border-l-2 border-black">
                </div>
            </div>
        </div>

    )
}

export default Dashboard