import { useState, useEffect } from "react";
import logo from "../../assets/logo-black.png";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./Style.css";
const StatsNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("section-id");
      const sectionTop = section.getBoundingClientRect().top;
      setIsFixed(sectionTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar-wrapper">
      <div id="section-id" style={{ height: "50px" }}></div>
      <div
        className={`w-full flex justify-between px-3 py-5 md:px-10 md:py-6 items-center gap-3 bg-[#ededed] dark:bg-[#17153B] ${
          isFixed ? "fixed-navbar" : "rounded-xl"
        }`}
      >
        <div>
          <img src={logo} alt="logo" className="w-[120px] h-[30px] md:w-full" />
        </div>
        <div className="flex justify-start gap-3 md:gap-5">
          <button className="px-4 py-2 md:px-4 md:py-3 bg-transparent border-[1px] border-[#b0cc81] rounded-full text-[#181617] dark:text-white cursor-pointer">
            <IoShareSocialSharp />
          </button>
          <button className="w-auto px-3 py-2 md:px-5 md:py-3 bg-transparent border-[1px] border-[#1e43b5] rounded-full text-[#181617] cursor-pointer dark:text-white">
            <span className="md:hidden">Download</span>
            <span className="hidden md:inline">Download the 2024 Report</span>
          </button>
          {/* Dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <div className="btn btn-ghost" onClick={toggleMenu}>
                <FaBars className="text-[#181617] text-2xl dark:text-white" />
              </div>
            </div>
            {menuOpen && (
              <ul
                className="bg-base-100 rounded-box z-[1] w-[320px] md:w-[420px] shadow absolute -right-5 top-[-20px] dark:bg-[#17153B]"
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
                      className="text-2xl text-black dark:text-white"
                      onClick={toggleMenu}
                    />
                  </div>
                  <li className="hover:bg-blue-100 hover:dark:bg-[#2E236C] py-3 rounded-md dark:text-white">
                    <a>The WPPOOL Index</a>
                  </li>
                  <li className="hover:bg-blue-100 hover:dark:bg-[#2E236C] py-3 rounded-md dark:text-white">
                    <a>All Companies</a>
                  </li>
                  <li className="hover:bg-blue-100 hover:dark:bg-[#2E236C] py-3 rounded-md dark:text-white">
                    <a>Potential Future Listings</a>
                  </li>
                  <li className="hover:bg-blue-100 hover:dark:bg-[#2E236C] py-3 rounded-md dark:text-white">
                    <a>State of USA</a>
                  </li>
                  <li className="hover:bg-blue-100 hover:dark:bg-[#2E236C] py-3 rounded-md dark:text-white">
                    <a>Stories & Ideas</a>
                  </li>
                  <li className="hover:bg-blue-100 hover:dark:bg-[#2E236C] py-3 rounded-md dark:text-white">
                    <a>About WPPOOL</a>
                  </li>
                  <li className="hover:bg-blue-100 hover:dark:bg-[#2E236C] py-3 rounded-md dark:text-white">
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

export default StatsNav;
