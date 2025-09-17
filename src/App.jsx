import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
    </main>
  );
};

export default App;
