import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import s1 from "../../assets/s-1.png";
import s2 from "../../assets/s-2.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
    },
  });
  return (
    <div>
      <div ref={sliderRef} className="keen-slider right-[2.2rem]">
        <div className="keen-slider__slide number-slide1">
          <img src={s1} alt="" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={s2} alt="" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={s1} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-[-3rem]">
        <div className="flex justify-start gap-5 items-center">
          <div className="flex justify-start gap-3 items-center">
            <button className="w-auto px-5 py-5 bg-white shadow-2xl rounded-full text-[#1e43b5] cursor-pointer">
              <FaArrowLeftLong />
            </button>
            <button className="w-auto px-5 py-5 bg-white shadow-2xl rounded-full text-[#1e43b5] cursor-pointer">
              <FaArrowRightLong />
            </button>
          </div>
          <div className="flex justify-start gap-1 items-center">
            <p>Pages</p>
            <button
              type="button"
              className="inline-flex w-[10rem] font-normal justify-between items-center bg-white shadow-2xl gap-x-1 rounded-full px-6 py-5 mx-auto text-[16px] text-black ring-1 ring-inset ring-gray-300 font-sans"
              id="menu-button"
              aria-haspopup="true"
            >
              1 and 2
              <IoMdArrowDropdown />
            </button>
            <p>Of 37</p>
          </div>
        </div>
        <div className="mr-[10rem]">
          <button className="w-auto px-6 py-4 bg-[#1e43b5] border-[1px] border-[#1e43b5] shadow-2xl rounded-full text-white cursor-pointer">
            <span className="md:hidden">Download Report</span>
            <span className="hidden md:inline">Download the 2024 Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
