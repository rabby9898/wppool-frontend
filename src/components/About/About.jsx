import mask from "../../assets/Mask group.png";
const About = () => {
  return (
    <div className="px-5 md:px-8 mx-16 mt-10 lg:px-16 py-0  bg-white rounded-xl">
      <div className="w-full flex justify-between items-center">
        <div className="w-full">
          <h1 className="text-5xl font-nantes text-[#191618]">About WPPOOL</h1>
          <h3 className="text-[30px] text-[#7D7F81] font-nantes">
            Investing in wppool for over 50 years
          </h3>
          <p className="text-base font-sans text-[#191618] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborumnumquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique
            accusantium nemo autem.
          </p>
          <button className="px-5 py-4 bg-[#2042B6] rounded-full text-white cursor-pointer mt-8">
            Contact WPPOOL
          </button>
        </div>
        <div className="w-full">
          <img src={mask} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
