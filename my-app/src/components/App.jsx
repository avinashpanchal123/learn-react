import { useState } from "react";
import "./../App.css";
import ColourPicker from "./ColourPicker";
import PasswordGenerator from "./PasswordGenerator";
import Message from "./Message";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
