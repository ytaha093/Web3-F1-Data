

const Header = (props) => {

    return (
        <div className="w-full h-full flex justify-between items-center text-xl">
            <div className="w-1/5">
                <label for="year">Season: </label>
                <select name="year" className="w-1/3 border-2 border-gray-400 rounded">
                    <option value={2024}>2024</option>
                    <option value={2023}>2023</option>
                    <option value={2022}>2022</option>
                    <option value={2021}>2021</option>
                </select>
            </div>
            <div className="flex font-bold text-2xl">
                F1 Dashboard
            </div>
            <div className="w-1/5 flex justify-evenly items-center">
                <button type="button"
                    className="bg-stone-400 hover:bg-stone-600 text-white py-2 px-4 rounded-2xl w-1/2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 w-[50%]">
                    Favorites
                </button>
                <button type="button"
                    className="bg-stone-400 hover:bg-stone-600 text-white py-2 px-4 rounded-2xl w-1/2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 w-[44%]">
                    About
                </button>
            </div>
        </div>
    )
}

export default Header