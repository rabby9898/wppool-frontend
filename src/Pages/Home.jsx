import About from "../components/About/About";
import AllCompanies from "../components/AllCompanies/AllCompanies";
import Banner from "../components/Banner/Banner";
import Portfolio from "../components/Portfolio/Portfolio";
import Potentials from "../components/Potentials/Potentials";
import State from "../components/State/State";
import Statistics from "../components/Statistics/Statistics";
import Stories from "../components/Stories/Stories";

const Home = () => {
  return (
    <div className="bg-[#ededed] px-6 py-6">
      <Banner />
      <Statistics />
      <AllCompanies />
      <Potentials />
      <State />
      <Stories />
      <About />
      <Portfolio />
    </div>
  );
};

export default Home;
