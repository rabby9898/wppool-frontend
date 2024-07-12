import { GoPlus } from "react-icons/go";
import StatsNav from "./StatsNav";
import { FiMinus } from "react-icons/fi";
import Mainontent from "./Mainontent";
import { useContext } from "react";
import { ModeContext } from "../../Provider/DarkMode";
const Statistics = () => {
  const { isDarkMode } = useContext(ModeContext);
  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="bg-white px-5 md:px-8 py-5 my-8 md:my-10 lg:my-16 dark:bg-[#17153B]">
        <StatsNav />
        {/* <<<<<<<<--------------Statistics--------------->>>> */}
        <div className="block lg:flex md:justify-start">
          {/* -------SIdebar--------- */}
          <div className="lg:block hidden bg-[#eff3f6] w-80 border-none rounded-xl mt-5 dark:bg-[#2E236C]">
            <div className="px-5 py-2 space-y-2 text-lg font-nantes ">
              <a
                href="#"
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray-500 hover:bg-[#2042B6] hover:text-white dark:text-white"
              >
                <div className="w-full flex justify-between items-center">
                  <p className=" font-medium">The Index</p>

                  <FiMinus />
                </div>
              </a>

              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 hover:bg-[#2042B6] hover:text-white dark:text-white"
              >
                <div className="w-full flex justify-between items-center">
                  <span>The Index Tab Two</span>
                  <GoPlus />
                </div>
              </a>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 hover:bg-[#2042B6] hover:text-white dark:text-white"
              >
                <div className="w-full flex justify-between items-center">
                  <span>The Index Tab Three</span>
                  <GoPlus />
                </div>
              </a>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 hover:bg-[#2042B6] hover:text-white dark:text-white"
              >
                <div className="w-full flex justify-between items-center">
                  <span>The Index Tab Four</span>
                  <GoPlus />
                </div>
              </a>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 hover:bg-[#2042B6] hover:text-white dark:text-white"
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
          <div className="lg:ml-5 lg:pl-4 mt-5 mx-2">
            <Mainontent />
          </div>
          {/* -------Main Content End------*/}
        </div>
        {/* <<<<<<<<--------------Statistics--------------->>>> */}
      </div>
    </div>
  );
};

export default Statistics;
