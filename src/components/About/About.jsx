import mask from "../../assets/Mask group.png";
const About = () => {
  return (
    <div className="px-5 md:px-8 lg:mx-16 mt-10 lg:px-16 py-0  bg-white rounded-xl dark:bg-[#17153B]">
      <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-between items-center">
        <div className="w-full py-8 md:py-16 lg:py-8">
          <h1 className="text-3xl md:text-5xl font-nantes text-[#191618] dark:text-gray-200">
            About WPPOOL
          </h1>
          <h3 className="text-[20px] md:text-[30px] text-[#7D7F81] font-nantes">
            Investing in wppool for over 50 years
          </h3>
          <p className="text-base font-sans text-[#191618] mt-2 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborumnumquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique
            accusantium nemo autem.
          </p>
          <button className="px-5 py-4 bg-[#2042B6] rounded-full text-white cursor-pointer mt-8 shadow-2xl">
            Contact WPPOOL
          </button>
        </div>
        <div className="w-full">
          <img className="ml-0 md:mx-auto lg:ml-[8rem]" src={mask} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
