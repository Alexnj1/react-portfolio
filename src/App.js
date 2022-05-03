import React, { useState } from "react";
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./components/portfolio";

function App() {
  const navCategories = [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ];
  const [currentCat, changeCat] = useState(navCategories[0].name);
  return (
    <div>
      <Header
        categories={navCategories}
        currentCat={currentCat}
        changeCat={changeCat}
      ></Header>
      {currentCat === 'About Me' ? <About></About> : console.log('none')}
      {currentCat === 'Portfolio'? <Portfolio></Portfolio>: console.log('none')}
      <Footer></Footer>
    </div>
  );
}

export default App;
