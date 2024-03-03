import { useState } from "react";
import "./App.css";
import Upper_nav from "./Components/Upper_nav";
import Navbar from "./Components/Navbar";
import Crousel from "./Components/Crousel";
import Hero_lower from "./Components/hero_lower";
import Workforce from "./Components/Workforce";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Industrial_Tranding from "./Components/Industrial_Tranding";
import About from "./Components/About";
// import RespoNav from './Components/RespoNav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Upper_nav></Upper_nav>
      <Navbar></Navbar>
      <Industrial_Tranding></Industrial_Tranding>
      <About></About>
      <Hero_lower></Hero_lower>
      <Workforce></Workforce>
      <Card></Card>
      <Footer></Footer>
    </>
  );
}

export default App;
