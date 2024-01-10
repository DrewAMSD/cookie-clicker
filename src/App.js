import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import CookiePage from "./routes/CookiePage";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CookiePage" element={<CookiePage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
