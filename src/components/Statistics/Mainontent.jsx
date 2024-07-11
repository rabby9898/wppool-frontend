import { useState } from "react";
import statsImg from "../../assets/Union.png";
import { IoMdArrowDropdown } from "react-icons/io";
import Chart from "./Chart";
const Mainontent = () => {
  const [activeTab, setActiveTab] = useState("YTD");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenType, setIsOpenType] = useState(false);

  const handleToggleSector = () => {
    setIsOpen(!isOpen);
  };
  const handleToggleType = () => {
    setIsOpenType(!isOpenType);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex justify-start gap-1 items-center">
        <img src={statsImg} alt="" />
        <h1 className="text-4xl text-[#191618] font-nantes font-normal">
          The WPPOOL Index
        </h1>
      </div>
      <div className="grid grid-cols-4 items-center gap-5 mt-5">
        <div className="w-full flex justify-between items-center gap-12 bg-[#F3F3F3] rounded-md px-3 py-5">
          <h1 className="text-3xl text-[#FC714D] font-nantes font-normal">
            +66.2%
          </h1>
          <p className="text-[#191618] text-right pr-2 text-sm border-[#FC714D] border-r-[6px]">
            WPPOOL Index
          </p>
        </div>

        <div className="w-full flex justify-between items-center gap-12 bg-[#F3F3F3] rounded-md px-3 py-5">
          <h1 className="text-3xl text-[#615DE3] font-nantes font-normal">
            +26.6%
          </h1>
          <p className="text-[#191618] text-right pr-2 text-sm border-[#615DE3] border-r-[6px]">
            Goolge Index
          </p>
        </div>

        <div className="w-full flex justify-between items-center gap-12 bg-[#F3F3F3] rounded-md px-3 py-5">
          <h1 className="text-3xl text-[#7CA63A] font-nantes font-normal">
            +34.1%
          </h1>
          <p className="text-[#191618] text-right pr-2 text-sm py-[10px] border-[#7CA63A] border-r-[6px]">
            Mircrosoft
          </p>
        </div>

        <div className="w-full flex justify-between items-center gap-20 bg-[#F3F3F3] rounded-md px-3 py-5">
          <h1 className="text-3xl text-[#6F34A1] font-nantes font-normal">
            +17%
          </h1>
          <p className="text-[#191618] text-right pr-2 text-sm border-[#6F34A1] border-r-[6px]">
            Twitter Index
          </p>
        </div>
      </div>
      {/* <<<---Dropdown---->>>> */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-5">
          <div className="relative inline-block text-left my-5">
            <div>
              <button
                type="button"
                className="inline-flex w-[14rem] justify-between bg-[#2042B6] gap-x-1.5 rounded-full px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={handleToggleSector}
              >
                Sectors
                <IoMdArrowDropdown />
              </button>
            </div>
            {isOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Sectors-2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-1"
                  >
                    Sectors-3
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="relative inline-block text-left my-5">
            <div>
              <button
                type="button"
                className="inline-flex w-[14rem] justify-between bg-[#2042B6] gap-x-1.5 rounded-full px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
                id="menu-button"
                aria-expanded={isOpenType}
                aria-haspopup="true"
                onClick={handleToggleType}
              >
                Types of IPO
                <IoMdArrowDropdown />
              </button>
            </div>
            {isOpenType && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Types of IPO-2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-1"
                  >
                    Types of IPO-3
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <<<---Tab MIni---->>>> */}
        <div className="w-[280px]">
          <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
            {["1Y", "YTD", "6M", "1M", "1W"].map((tab) => (
              <li key={tab}>
                <a
                  href={`#page${tab}`}
                  className={`flex justify-center py-1 ${
                    activeTab === tab
                      ? "bg-[#2042B6] rounded-full shadow text-white"
                      : ""
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <<<---Charts---->>>>  */}
      <div>
        <Chart />
      </div>
    </div>
  );
};

export default Mainontent;
