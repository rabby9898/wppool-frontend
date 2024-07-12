import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import s1 from "../../assets/s-1.png";
import s2 from "../../assets/s-2.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const handlePrev = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const handleNext = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  useEffect(() => {
    if (instanceRef.current) {
      console.log("Keen Slider initialized:", instanceRef.current);
    } else {
      console.log("Keen Slider not initialized");
    }
  }, [instanceRef]);

  return (
    <div>
      <div
        ref={sliderRef}
        className="keen-slider right-[0rem] lg:right-[2.2rem]"
      >
        <div className="keen-slider__slide number-slide1">
          <img src={s1} alt="Slide 1" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={s2} alt="Slide 2" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={s1} alt="Slide 3" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="flex justify-start gap-5 items-center">
          <div className="flex justify-start gap-3 items-center">
            <button
              className="w-auto p-3 lg:p-5 bg-white hover:bg-[#1e43b5] hover:text-white shadow-2xl rounded-full text-[#1e43b5] cursor-pointer"
              onClick={handlePrev}
            >
              <FaArrowLeftLong />
            </button>
            <button
              className="w-auto p-3 lg:p-5 bg-white hover:bg-[#1e43b5] hover:text-white shadow-2xl rounded-full text-[#1e43b5] cursor-pointer"
              onClick={handleNext}
            >
              <FaArrowRightLong />
            </button>
          </div>
          <div className="flex justify-start gap-1 items-center">
            <p>Pages</p>
            <button
              type="button"
              className="inline-flex w-[7rem] lg:w-[10rem] font-normal justify-between items-center bg-white hover:bg-[#1e43b5] hover:text-white shadow-2xl gap-x-1 rounded-full px-3 lg:px-6 py-3 lg:py-5 mx-auto text-[12px] lg:text-[16px] text-black ring-1 ring-inset ring-gray-300 font-sans"
              id="menu-button"
              aria-haspopup="true"
            >
              {currentSlide + 1} and {currentSlide + 2}
              <IoMdArrowDropdown />
            </button>
            <p>Of 37</p>
          </div>
        </div>
        <div className="mr-0 mt-10 md:mt-0 lg:mr-[10rem]">
          <button className="w-auto px-3 lg:px-6 py-3 lg:py-5 bg-[#1e43b5] border-[1px] border-[#1e43b5] shadow-2xl rounded-full text-white cursor-pointer">
            <span className="md:hidden">Download Report</span>
            <span className="hidden md:inline">Download the 2024 Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
