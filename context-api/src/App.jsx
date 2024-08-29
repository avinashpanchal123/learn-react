import { useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import UserContextProvider from "./UserContext/UserContextProvider";

function App() {
  return (
    <>
      {/* <UserContextProvider>
        <Home />
      </UserContextProvider> */}
      <Home />
    </>
  );
}

export default App;
