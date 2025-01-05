import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // Login with user data and token
  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("token", token);  // Store token for further requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;  // Include token in API requests
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
