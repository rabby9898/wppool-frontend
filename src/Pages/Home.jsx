import AllCompanies from "../components/AllCompanies/AllCompanies";
import Banner from "../components/Banner/Banner";
import Potentials from "../components/Potentials/Potentials";
import Statistics from "../components/Statistics/Statistics";

const Home = () => {
  return (
    <div className="bg-[#ededed] px-6 py-6">
      <Banner />
      <Statistics />
      <AllCompanies />
      <Potentials />
    </div>
  );
};

export default Home;
