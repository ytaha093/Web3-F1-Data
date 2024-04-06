import { useState, useContext } from "react";
import "./App.css";
import Login from './components/LoginPage.jsx';
import { AppContext } from "./context.jsx";
import SideBar from "./components/RacesSideBar.jsx";

function App() {
  const {isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  

  if (isLoggedIn) {
    return (
      <SideBar/>
    );
  }
  else {
      return (
    <> 
      <Login/>
    </>
  );
  }

}

export default App;
