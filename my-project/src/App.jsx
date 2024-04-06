import { useState, useContext } from "react";
import "./App.css";
import Login from './components/LoginPage.jsx';
import { AppContext } from "./context.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SideBar from "./components/RacesSideBar.jsx";
import HomeView1 from "./components/HomeView1.jsx";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)


  if (isLoggedIn) {
    return (
      <HomeView1 />
      //<SideBar />
    );
  }
  else {
    return (
      <>
        <Login />
      </>
    );
  }

}

export default App;
