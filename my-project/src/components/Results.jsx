
const Results = () => {


    return (
        <div className="mr-[5%] ml-[2%] flex justify-left h-[83vh] w-[58%] border-2 bg-white shadow-md rounded-md border-black px-2">
            <div className="w-full h-full flex flex-col">
                <h1 className="text-3xl pt-2 text-center text-gray-700 uppercase tracking-wider font-semibold mb-2">
                    Races
                </h1>

                <div>
                    Race Name, Round #, year, <span className=" underline hover:cursor-pointer">Circuit Name</span>, Date, URL
                </div>
                <div className="flex gap-2 h-full">
                    <div className="w-6/12 border-t-2">
                    </div>
                    <div className="w-6/12 border-t-2">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results