import p1 from "../../assets/p-1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p-3.png";
import p4 from "../../assets/p-4.png";
import p5 from "../../assets/p-5.png";
import p6 from "../../assets/p-6.png";
import p7 from "../../assets/p-7.png";
import p8 from "../../assets/p-8.png";
import p9 from "../../assets/p-9.png";
import p10 from "../../assets/p-10.png";

const Potentials = () => {
  return (
    <div className="px-5 md:px-8 lg:px-20 py-10 lg:py-16">
      <div>
        <h1 className="text-3xl md:text-5xl text-[#191618] font-nantes font-normal">
          Potential Future Listings
        </h1>
        <p className="text-base font-sans font-normal text-[#191618] my-7">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. <br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-4">
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p1} alt="" />
        </div>
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p2} alt="" />
        </div>
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p3} alt="" />
        </div>
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p4} alt="" />
        </div>
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p5} alt="" />
        </div>
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p6} alt="" />
        </div>
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p7} alt="" />
        </div>
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p8} alt="" />
        </div>
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p9} alt="" />
        </div>{" "}
        <div className="bg-white rounded-md w-full h-[120px] px-4 py-4 flex justify-center items-center">
          <img className="" src={p10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Potentials;
