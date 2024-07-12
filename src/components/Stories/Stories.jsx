import c1 from "../../assets/c-1.png";
import c2 from "../../assets/c-2.png";

const Stories = () => {
  return (
    <div className="px-5 md:px-8 lg:px-16 py-5 md:py-10 lg:py-32">
      <div className="mb-10">
        <h1 className="text-[#191618] text-5xl font-nantes dark:text-white">
          Stories & Ideas
        </h1>
        <p className="text-xl font-sans dark:text-white">
          The latest news and updates
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-20 md:gap-10 lg:gap-5 py-20 mt-5 md:mt-16 lg:mt-20">
        <div className="relative w-full lg:w-[420px] lg:h-[250px] px-5 py-5 bg-white rounded-md dark:bg-[#2E236C]">
          <img
            className="absolute bottom-[10rem] md:bottom-[8rem] lg:bottom-[10rem]"
            src={c1}
            alt=""
          />
          <div className="mt-[4rem]">
            <p className="text-[#2042B6] font-sans text-base dark:text-white">
              By: Sahabuddin Sagor
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-[420px] lg:h-[250px] px-5 py-5 bg-white rounded-md dark:bg-[#2E236C]">
          <img
            className="absolute bottom-[10rem] md:bottom-[8rem] lg:bottom-[10rem]"
            src={c2}
            alt=""
          />
          <div className="mt-[5.9rem]">
            <p className="text-[#2042B6] font-sans text-base dark:text-white">
              By: Nayem Khan
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-[420px] lg:h-[250px] px-5 py-5 bg-white rounded-md dark:bg-[#2E236C]">
          <img
            className="absolute bottom-[10rem] md:bottom-[8rem] lg:bottom-[10rem]"
            src={c1}
            alt=""
          />
          <div className="mt-[4rem]">
            <p className="text-[#2042B6] font-sans text-base dark:text-white">
              By: Sahabuddin Sagor
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-[420px] lg:h-[250px] px-5 py-5 bg-white rounded-md mt-5 md:mt-16 lg:mt-20 dark:bg-[#2E236C]">
          <img
            className="absolute bottom-[10rem] md:bottom-[8rem] lg:bottom-[10rem]"
            src={c1}
            alt=""
          />
          <div className="mt-[4rem]">
            <p className="text-[#2042B6] font-sans text-base dark:text-white">
              By: Sahabuddin Sagor
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-[420px] lg:h-[250px] px-5 py-5 bg-white rounded-md mt-5 md:mt-16 lg:mt-20 dark:bg-[#2E236C]">
          <img
            className="absolute bottom-[10rem] md:bottom-[8rem] lg:bottom-[10rem]"
            src={c2}
            alt=""
          />
          <div className="mt-[5.9rem]">
            <p className="text-[#2042B6] font-sans text-base dark:text-white">
              By: Nayem Khan
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-[420px] lg:h-[250px] px-5 py-5 bg-white rounded-md mt-5 md:mt-16 lg:mt-20 dark:bg-[#2E236C]">
          <img
            className="absolute bottom-[10rem] md:bottom-[8rem] lg:bottom-[10rem]"
            src={c1}
            alt=""
          />
          <div className="mt-[4rem]">
            <p className="text-[#2042B6] font-sans text-base dark:text-white">
              By: Sahabuddin Sagor
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
      <hr className="h-px bg-[#90B8F0] border-0 mt-8"></hr>
    </div>
  );
};

export default Stories;
