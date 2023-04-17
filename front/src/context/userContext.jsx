import { createContext, useState } from "react";

const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: false,
    id: null,
    name: null,
  });

  return (
    <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>
  )
}

export { userContext, UserContextProvider }
