import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import WhatIdo from "./components/WhatIdo";
import MyTools from "./components/MyTools";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import "./css/main.css";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Intro />
      <WhatIdo />
      <MyTools />
      <Portfolio />
      <About />
      <Contact />
    </Fragment>
  );
}

export default App;
