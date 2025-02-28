import React, { createContext, useContext, useState } from "react";

// Create a Context for the role
const RoleContext = createContext();

export const useRole = () => {
  return useContext(RoleContext);
};

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState("alumni"); 

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};