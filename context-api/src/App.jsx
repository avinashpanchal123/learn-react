import { useState } from "react";
// import "./App.css";
import Profile from "./Home/Profile";
import UserContextProvider from "./UserContext/UserContextProvider";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <UserContextProvider>
        <Profile />
        <Home/>
      </UserContextProvider>
    </>
  );
}

export default App;
