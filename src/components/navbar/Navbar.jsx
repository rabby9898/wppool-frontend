import logo from "../../assets/logo.png";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaBars, FaLightbulb } from "react-icons/fa";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { ModeContext } from "../../Provider/DarkMode";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleDarkMode, isDarkMode } = useContext(ModeContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="w-full flex justify-between px-3 py-5 md:px-10 md:py-6 items-center gap-3">
        <div>
          <img src={logo} alt="logo" className="w-[120px] h-[30px] md:w-full" />
        </div>
        <div className="flex justify-start gap-3 md:gap-5">
          <div className="">
            <button
              onClick={toggleDarkMode}
              className="text-3xl border-[1px] border-white bg-white rounded-full px-2 py-2 md:px-3 md:py-3"
            >
              {isDarkMode ? (
                <FaLightbulb className="text-yellow-400"></FaLightbulb>
              ) : (
                <MdDarkMode />
              )}
            </button>
          </div>
          <button className=" px-4 py-2 md:px-5 md:py-3 bg-transparent border-[1px] border-white rounded-full text-white cursor-pointer">
            <IoShareSocialSharp />
          </button>
          <button className="w-auto px-3 py-2 md:px-5 md:py-3 bg-transparent border-[1px] border-white rounded-full text-white cursor-pointer">
            <span className="md:hidden">Download</span>
            <span className="hidden md:inline">Download the 2024 Report</span>
          </button>
          {/* Dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <div className="btn btn-ghost" onClick={toggleMenu}>
                <FaBars className="text-white text-2xl" />
              </div>
            </div>
            {/* top-[-20px] */}
            {menuOpen && (
              <ul
                className="bg-base-100 rounded-box z-[1] w-[320px] md:w-[420px] shadow absolute -right-5 top-[-20px]"
                style={{ maxWidth: "calc(100vw - 20px)", overflowX: "hidden" }}
              >
                <div className="px-5 md:px-6">
                  <div className="flex justify-between gap-3 items-center py-4 mb-5">
                    <button className="w-auto px-5 py-5 bg-[#b0cc81] border-[1px] border-[#b0cc81] rounded-full text-white cursor-pointer">
                      <IoShareSocialSharp />
                    </button>
                    <button className="w-auto px-6 py-4 bg-[#1e43b5] border-[1px] border-[#1e43b5] rounded-full text-white cursor-pointer">
                      <span className="md:hidden">Download Report</span>
                      <span className="hidden md:inline">
                        Download the 2024 Report
                      </span>
                    </button>
                    <RxCross2
                      className="text-2xl text-black"
                      onClick={toggleMenu}
                    />
                  </div>
                  <li className=" hover:bg-blue-100 py-3 rounded-md">
                    <a>The WPPOOL Index</a>
                  </li>
                  <li className=" hover:bg-blue-100 py-3 rounded-md">
                    <a>All Companies</a>
                  </li>
                  <li className=" hover:bg-blue-100 py-3 rounded-md">
                    <a>Potential Future Listings</a>
                  </li>
                  <li className=" hover:bg-blue-100 py-3 rounded-md">
                    <a>State of USA</a>
                  </li>
                  <li className=" hover:bg-blue-100 py-3 rounded-md">
                    <a>Stories & Ideas</a>
                  </li>
                  <li className=" hover:bg-blue-100 py-3 rounded-md">
                    <a>About WPPOOL</a>
                  </li>
                  <li className=" hover:bg-blue-100 py-3 rounded-md">
                    <a>WPPOOL Portfolio Companies</a>
                  </li>
                  <li className="py-4">
                    <a className="text-blue-500">Visit WPPOOL</a>
                  </li>
                </div>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
