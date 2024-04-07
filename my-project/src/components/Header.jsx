const Header = (props) => {
    return (
        <div className="h-[16vh] w-screen flex justify-center items-center">
            <div className="border-2 bg-white shadow-md rounded-md px-2 border-black w-[90%] h-[80%] flex justify-between items-center text-xl">
                <div className="flex-initial">
                    <label htmlFor="year" className="mr-2">Season:</label>
                    <select name="year" className="border-2 border-gray-400 rounded">
                        <option value={2024}>2024</option>
                        <option value={2023}>2023</option>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                    </select>
                </div>
                <div className="flex-grow text-center font-bold text-2xl">
                    F1 Dashboard
                </div>
                <div className="flex-initial">
                    <button type="button" className="bg-stone-400 hover:bg-stone-600 text-white py-2 px-4 rounded-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 mr-2">
                        Favorites
                    </button>
                    <button type="button" className="bg-stone-400 hover:bg-stone-600 text-white py-2 px-4 rounded-2xl focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
                        About
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
