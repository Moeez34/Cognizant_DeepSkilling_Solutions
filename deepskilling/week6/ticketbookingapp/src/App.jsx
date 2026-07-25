import { useState } from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greeting from "./Greeting";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {

    setIsLoggedIn(true);

  };

  const handleLogout = () => {

    setIsLoggedIn(false);

  };

  return (

    <div>

      <Greeting isLoggedIn={isLoggedIn} />

      {

        isLoggedIn ?

        <LogoutButton onClick={handleLogout} />

        :

        <LoginButton onClick={handleLogin} />

      }

    </div>

  );

}

export default App;