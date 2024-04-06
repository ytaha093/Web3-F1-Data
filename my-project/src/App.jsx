import { useState, useContext } from "react";
import "./App.css";
import Login from './components/LoginPage.jsx';
import { AppContext } from "./context.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)


  if (isLoggedIn) {
    return (
      <Dashboard />
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
