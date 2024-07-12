import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";

const Footer = () => {
  return (
    <div className="relative right-[4rem] bg-[#E6E6E6] rounded-r-2xl pr-5 md:pr-8 lg:pr-16 py-5 md:py-10 lg:py-16">
      <div className="px-32 grid grid-cols-3 gap-10">
        <div className="w-full">
          <Phase1 />
        </div>
        <div className="w-full">
          <Phase2 />
        </div>
        <div className="w-full">
          <Phase3 />
        </div>
      </div>
    </div>
  );
};

export default Footer;
