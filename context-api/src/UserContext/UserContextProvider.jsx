import { useContext, createContext, useState } from "react";
import App from "../App";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <UserContext.Provider value={{ theme, setTheme }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
