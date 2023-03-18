import { createContext, useState } from "react";

export const profile = createContext({});

export const ProfileProvider = ({ children }) => {
  const [role, setRole] = useState("");
  return (
    <profile.Provider value={{ role, setRole }}>{children}</profile.Provider>
  );
};
