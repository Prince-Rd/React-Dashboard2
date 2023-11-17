import React, { useState } from "react";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import LeftBoard from "./components/LeftBoard";
import "./main.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="flexbox">
        <MainBoard></MainBoard>
        <LeftBoard></LeftBoard>
      </main>
    </div>
  );
}

export default App;