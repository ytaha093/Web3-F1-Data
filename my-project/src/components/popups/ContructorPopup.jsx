import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context.jsx";

const ContructorPopup = (props) => {
    // add favorates context

    return (
        <div className="absolute inset-0  z-50 w backdrop-blur-md flex justify-center items-center">
            <div className="h-[65vh] w-[30%] border-2 bg-white shadow-xl rounded-md border-gray-200 p-4 flex flex-row min-h-[400px]">
                <div className="flex h-1/6 w-full justify-between">
                    <span className=" text-2xl">Title</span>
                    <div className="flex w-1/2 gap-3 justify-end">
                        <button
                            type="button"
                            className="max-h-[40px] h-1/2 flex items-center bg-gray-200 hover:bg-gray-400 text-black border-2 border-black py-2 px-2 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
                            Favorite
                        </button>
                        <button
                            type="button"
                            className="max-h-[40px] h-1/2 flex items-center bg-gray-200 hover:bg-gray-400 text-black border-2 border-black py-2 px-2 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
                            X
                        </button>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>

    )

}

export default ContructorPopup