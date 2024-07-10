import Navbar from "../navbar/Navbar";
// import banner1 from "../../assets/banner-1.png";
import "./Banner.css";
const Banner = () => {
  // bg-[#2042B6]
  return (
    <div className="banner bg-[#2042B6] w-full h-[718px] z-50">
      <Navbar />
      <div className="text-white mt-32">
        <div className="my-16 px-8">
          <h1 className="text-4xl">60</h1>
          <p className="text-base">Companies</p>
        </div>
        <div className="my-16 px-8">
          <h1 className="text-4xl">$100B</h1>
          <p className="text-base">Market cap</p>
        </div>
        <div className="my-16 px-8">
          <h1 className="text-4xl">3.5X</h1>
          <p className="text-base">Revenue multiple</p>
        </div>
        <div className="my-16 px-8">
          <h1 className="text-4xl">60%</h1>
          <p className="text-base">LTM avg. revenue growth rate</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
