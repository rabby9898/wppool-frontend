import c1 from "../../assets/c-1.png";
import c2 from "../../assets/c-2.png";

const Stories = () => {
  return (
    <div className="px-5 md:px-8 lg:px-16 py-5 md:py-10 lg:py-16">
      <div>
        <h1 className="text-[#191618] text-5xl font-nantes">Stories & Ideas</h1>
        <p className="text-xl font-sans">The latest news and updates</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 py-20">
        <div className="relative w-[420px] h-[250px] px-5 py-5 bg-white rounded-md">
          <img className="absolute bottom-[10rem]" src={c1} alt="" />
          <div className="mt-[4rem]">
            <p className="text-[#2042B6] font-sans text-base">
              By: Sahabuddin Sagor
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-[420px] h-[250px] px-5 py-5 bg-white rounded-md">
          <img className="absolute bottom-[10rem]" src={c2} alt="" />
          <div className="mt-[5.9rem]">
            <p className="text-[#2042B6] font-sans text-base">By: Nayem Khan</p>
            <p className="my-3 font-nantes text-[#191618] text-lg">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-[420px] h-[250px] px-5 py-5 bg-white rounded-md">
          <img className="absolute bottom-[10rem]" src={c1} alt="" />
          <div className="mt-[4rem]">
            <p className="text-[#2042B6] font-sans text-base">
              By: Sahabuddin Sagor
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-[420px] h-[250px] px-5 py-5 bg-white rounded-md mt-5 md:mt-16 lg:mt-20">
          <img className="absolute bottom-[10rem]" src={c1} alt="" />
          <div className="mt-[4rem]">
            <p className="text-[#2042B6] font-sans text-base">
              By: Sahabuddin Sagor
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-[420px] h-[250px] px-5 py-5 bg-white rounded-md mt-5 md:mt-16 lg:mt-20">
          <img className="absolute bottom-[10rem]" src={c2} alt="" />
          <div className="mt-[5.9rem]">
            <p className="text-[#2042B6] font-sans text-base">By: Nayem Khan</p>
            <p className="my-3 font-nantes text-[#191618] text-lg">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <button className="px-3 py-1 bg-[#2042B6] rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="relative w-[420px] h-[250px] px-5 py-5 bg-white rounded-md mt-5 md:mt-16 lg:mt-20">
          <img className="absolute bottom-[10rem]" src={c1} alt="" />
          <div className="mt-[4rem]">
            <p className="text-[#2042B6] font-sans text-base">
              By: Sahabuddin Sagor
            </p>
            <p className="my-3 font-nantes text-[#191618] text-lg">
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
