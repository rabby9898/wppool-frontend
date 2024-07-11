import { GoPlus } from "react-icons/go";
import StatsNav from "./StatsNav";
import { FiMinus } from "react-icons/fi";
import Mainontent from "./Mainontent";
const Statistics = () => {
  return (
    <div className="bg-white p-5">
      <StatsNav />
      {/* <<<<<<<<--------------Statistics--------------->>>> */}
      <div className="flex justify-start">
        {/* -------SIdebar--------- */}
        <div className="lg:block hidden bg-[#eff3f6] w-80 border-none rounded-xl mt-5">
          <div className="px-5 py-2 space-y-2 text-lg font-nantes">
            <a
              href="#"
              aria-label="dashboard"
              className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray-500 hover:bg-[#2042B6] hover:text-white"
            >
              <div className="w-full flex justify-between items-center">
                <p className=" font-medium">The Index</p>

                <FiMinus />
              </div>
            </a>

            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 hover:bg-[#2042B6] hover:text-white"
            >
              <div className="w-full flex justify-between items-center">
                <span>The Index Tab Two</span>
                <GoPlus />
              </div>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 hover:bg-[#2042B6] hover:text-white"
            >
              <div className="w-full flex justify-between items-center">
                <span>The Index Tab Three</span>
                <GoPlus />
              </div>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 hover:bg-[#2042B6] hover:text-white"
            >
              <div className="w-full flex justify-between items-center">
                <span>The Index Tab Four</span>
                <GoPlus />
              </div>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 hover:bg-[#2042B6] hover:text-white"
            >
              <div className="w-full flex justify-between items-center">
                <span>The Index Tab Five</span>
                <GoPlus />
              </div>
            </a>
          </div>
        </div>
        {/* -------SIdebar End--------- */}
        {/* Main Content */}
        <div className="lg:ml-5 lg:pl-4 lg:flex lg:flex-col lg:w-full mt-5 mx-2">
          <Mainontent />
        </div>
        {/* -------Main Content End------*/}
      </div>
      {/* <<<<<<<<--------------Statistics--------------->>>> */}
    </div>
  );
};

export default Statistics;
