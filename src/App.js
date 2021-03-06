import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { UserContext } from "./store/userContext";
import Home from "./pages/Home/Home";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import LoggedinRouter from "./components/Loggedin";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/signin"
          element={user ? <Navigate replace to="/dashboard" /> : <Signin />}
        />
        <Route
          exact
          path="/signup"
          element={user ? <Navigate replace to="/dashboard" /> : <Signup />}
        />
        <Route path="/dashboard/*" element={<LoggedinRouter />} />
      </Routes>
    </div>
  );
}

export default App;
