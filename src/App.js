import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { UserContext } from "./store/userContext";
import Home from "./pages/Home/Home";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import LoggedinRouter from "./components/LoggedinRouter/Router";

function App() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  });

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<LoggedinRouter />} />
      </Routes>
    </div>
  );
}

export default App;
