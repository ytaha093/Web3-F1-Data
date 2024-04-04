import { useState, useContext } from "react";
import "./App.css";
import Login from './components/LoginPage.jsx';
import { AppContext } from "./context.jsx";

function App() {
  const {isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  

  if (isLoggedIn) {
    return (
      <h1> HELLO WORLD</h1>
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
