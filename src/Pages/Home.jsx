import { useContext } from "react";
import About from "../components/About/About";
import AllCompanies from "../components/AllCompanies/AllCompanies";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Portfolio from "../components/Portfolio/Portfolio";
import Potentials from "../components/Potentials/Potentials";
import State from "../components/State/State";
import Statistics from "../components/Statistics/Statistics";
import Stories from "../components/Stories/Stories";
import { ModeContext } from "../Provider/DarkMode";

const Home = () => {
  const { isDarkMode } = useContext(ModeContext);
  // className={`${isDarkMode && "dark"}`}
  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="bg-[#ededed] dark:bg-[#03001C] px-6 py-6">
        <Banner />
        <Statistics />
        <AllCompanies />
        <Potentials />
        <State />
        <Stories />
        <About />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
