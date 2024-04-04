import { useState } from "react";
import "./App.css";
import Login from './components/LoginPage.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log("user is logged is" + isLoggedIn)
    setIsLoggedIn(true);
    console.log("user is logged is" + isLoggedIn)
  };

  if (isLoggedIn) {
    return (
      <h1> HELLO WORLD</h1>
    );
  }
  else {
      return (
    <> 
      <Login handleLogin={handleLogin} />
    </>
  );
  }

}

export default App;
