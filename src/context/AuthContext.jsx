import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null); // traveler | host | null

  const loginAsTraveler = () => {
    setIsLoggedIn(true);
    setRole("traveler");
  };

  const loginAsHost = () => {
    setIsLoggedIn(true);
    setRole("host");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  const value = { isLoggedIn, role, loginAsTraveler, loginAsHost, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
