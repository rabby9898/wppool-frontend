import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";

const Footer = () => {
  return (
    <div className="relative lg:right-[4rem] bg-[#E6E6E6] rounded-r-2xl pr-5 md:pr-1 py-5 md:py-10 lg:py-16">
      <div className="lg:pl-32 grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="w-full">
          <Phase1 />
        </div>
        <div className="w-full">
          <Phase2 />
        </div>
        <div className="w-full mt-8 md:mt-0">
          <Phase3 />
        </div>
      </div>
    </div>
  );
};

export default Footer;
