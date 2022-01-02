import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState(null);

  // Login updates the user data with a name parameter
  const handleSignin = (user) => {
    setUser(user);
    console.log(1111111111111111);
  };

  // Logout updates the user data to default
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, handleSignin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
