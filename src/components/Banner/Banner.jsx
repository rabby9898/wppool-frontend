import Navbar from "../navbar/Navbar";
// import banner1 from "../../assets/banner-1.png";
import "./Banner.css";
import { IoArrowDownOutline } from "react-icons/io5";
const Banner = () => {
  // bg-[#2042B6]
  return (
    <div className="relative bg-[#2042B6] w-full h-[718px] z-50">
      <Navbar />
      <div className="flex flex-row-reverse md:flex-col">
        <div className="banner absolute top-[100px]"></div>

        <div className="text-white mt-80 md:mt-24 grid grid-cols-2 md:grid-cols-1 items-center ">
          <div className="my-8  px-10">
            <h1 className="text-4xl font-nantes">60</h1>
            <p className="text-base font-messina">Companies</p>
          </div>
          <div className="my-8  px-10">
            <h1 className="text-4xl font-nantes">$100B</h1>
            <p className="text-base font-messina">Market cap</p>
          </div>
          <div className="my-8  px-10">
            <h1 className="text-4xl font-nantes">3.5X</h1>
            <p className="text-base font-messina">Revenue multiple</p>
          </div>
          <div className="my-8  px-10">
            <h1 className="text-4xl font-nantes">60%</h1>
            <p className="text-base font-messina">
              LTM avg. revenue growth rate
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-[7px] md:right-[70px] bottom-[25px] md:bottom-[70px]">
        <button className="btn w-16 h-16 bg-white rounded-full shadow-2xl">
          <IoArrowDownOutline className="text-2xl text-[#2042B6]" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
