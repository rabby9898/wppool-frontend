import Navbar from "../navbar/Navbar";
import CountUp from "react-countup";
import "./Banner.css";
import { IoArrowDownOutline } from "react-icons/io5";
const Banner = () => {
  // bg-[#2042B6]
  return (
    <div className="relative bg-[#2042B6] w-full h-[718px] z-50 rounded-2xl shadow-xl">
      <Navbar />
      <div className="flex flex-row-reverse md:flex-col">
        <div className="banner absolute top-[100px]"></div>

        <div className="text-white mt-80 md:mt-24 grid grid-cols-2 md:grid-cols-1 items-center ">
          <div className="my-8  px-10">
            <h1 className="text-4xl font-nantes dark:text-gray-300">
              <CountUp end={60} duration={2.5} />
            </h1>
            <p className="text-base font-messina dark:text-gray-300">
              Companies
            </p>
          </div>
          <div className="my-8  px-10">
            <h1 className="text-4xl font-nantes dark:text-gray-300">
              <CountUp end={100} duration={2.5} prefix="$" suffix="B" />
            </h1>
            <p className="text-base font-messina dark:text-gray-300">
              Market cap
            </p>
          </div>
          <div className="my-8  px-10">
            <h1 className="text-4xl font-nantes dark:text-gray-300">
              <CountUp end={3.5} duration={2.5} suffix="X" decimals={1} />
            </h1>
            <p className="text-base font-messina">Revenue multiple</p>
          </div>
          <div className="my-8  px-10">
            <h1 className="text-4xl font-nantes dark:text-gray-300">
              <CountUp end={60} duration={2.5} suffix="%" />
            </h1>
            <p className="text-base font-messina dark:text-gray-300">
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
