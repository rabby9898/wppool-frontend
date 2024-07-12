import { IoMdArrowDropdown } from "react-icons/io";
import Slider from "./Slider";

const State = () => {
  return (
    <div className="px-5 md:px-8 lg:px-16 py-5 md:py-10 lg:py-16">
      <div>
        <h1 className="text-4xl md:text-5xl font-nantes">State Of USA</h1>
        <button
          type="button"
          className="inline-flex w-[12rem] md:w-[14rem] font-normal justify-between items-center bg-[#2042B6] gap-x-1 rounded-full px-6 py-2 mx-auto my-8 text-[21px] md:text-[42px] text-white shadow-sm ring-1 ring-inset ring-gray-300 font-nantes"
          id="menu-button"
          aria-haspopup="true"
        >
          2024
          <IoMdArrowDropdown />
        </button>
        <p className="text-base font-sans mb-8">
          Click through the slides or download the report to view natively on
          your device.
        </p>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default State;
