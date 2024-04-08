import { useState, useContext } from "react";
import "./App.css";
import Login from './components/LoginPage.jsx';
import { AppContext } from "./context.jsx";
import SideBar from "./components/RacesSideBar.jsx";
import HomeView1 from "./components/HomeView1.jsx";

function App(props) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)


  if (isLoggedIn) {
    return (
      <HomeView1 supabase={props.supabase} />
    );
  }
  else {
    return (
      <>
        <Login supabase={supabase} />
      </>
    );
  }

}

export default App;
