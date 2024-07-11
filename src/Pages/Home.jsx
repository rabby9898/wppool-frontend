import AllCompanies from "../components/AllCompanies/AllCompanies";
import Banner from "../components/Banner/Banner";
import Statistics from "../components/Statistics/Statistics";

const Home = () => {
  return (
    <div className="bg-[#ededed] px-6 py-6">
      <Banner />
      <Statistics />
      <AllCompanies />
    </div>
  );
};

export default Home;
