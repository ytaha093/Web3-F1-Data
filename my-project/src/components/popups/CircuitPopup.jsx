import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CircuitPopup = (props) => {
  const { selectedRace } = useContext(AppContext);

  const { setshowCard } = useContext(AppContext);
  const position = [selectedRace.circuits.lng, selectedRace.circuits.lat];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-lg">
      <div className="max-h-[75vh] max-w-[45%] min-w-[500px] border-2 bg-white shadow-xl rounded-md border-gray-200 p-4 relative">
        <div className="mb-4 flex justify-between">
          <span className="text-3xl font-bold">Circuit Details</span>
          <button
            type="button"
            className="text-red-600 text-3xl font-bold hover:text-red-700 focus:outline-none"
            onClick={() => {
              setshowCard(false);
            }}
          >
            &times;
          </button>
        </div>
        <table className="w-full">
          <tbody>
            <tr key={1}>
              <td className="text-lg font-semibold">Name:</td>
              <td className="text-lg">{selectedRace.circuits.name}</td>
            </tr>
            <tr key={2}>
              <td className="text-lg font-semibold">Location:</td>
              <td className="text-lg">{selectedRace.circuits.location}</td>
            </tr>
            <tr key={3}>
              <td className="text-lg font-semibold">Country:</td>
              <td className="text-lg">{selectedRace.circuits.country}</td>
            </tr>
            <tr key={4}>
              <td className="text-lg font-semibold">URL:</td>
              <td className="text-lg">
                <a
                  href={selectedRace.circuits.url}
                  className="text-blue-600 hover:underline"
                >
                  {selectedRace.circuits.url != null ? "Wiki" : ""}
                </a>
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="text-center py-4">
                <button
                  type="button"
                  className="max-h-[40px] h-1/2 flex items-center bg-gray-200 hover:bg-gray-400 text-black border-2 border-black py-2 px-2 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Favorite
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <div className="min-h-60 bg-gray-300 rounded-lg mt-8 flex justify-center items-center">
                  <span className="text-lg font-semibold"> Image</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CircuitPopup;
