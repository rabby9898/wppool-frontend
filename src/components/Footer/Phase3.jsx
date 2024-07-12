import { FaLinkedin, FaTwitter } from "react-icons/fa";
const Phase3 = () => {
  return (
    <div>
      <div>
        <div>
          <h5 className="text-xl font-sans font-bold text-[#191618]">
            Cambridge
          </h5>
          <p className="text-[#191618] text-sm md:text-base font-sans">
            70728 Yost Burg, <br /> North Magdaleneview, <br /> UT 97952-2814
          </p>
        </div>
        <hr className="h-px w-full md:w-[200px] bg-black border-0 my-5"></hr>
        <div>
          <h5 className="text-xl font-sans font-bold text-[#191618]">London</h5>
          <p className="text-[#191618] text-sm md:text-base font-sans">
            Suite 292 903 Stehr Streets, <br />
            Langworthtown, SC 94577-9465
          </p>
        </div>
        <hr className="w-full md:w-[200px] h-px bg-black border-0 my-5"></hr>

        <div>
          <h5 className="text-xl font-sans font-bold text-[#191618]">
            San Francisco
          </h5>
          <p className="text-[#191618] text-sm md:text-base font-sans">
            19837 Gilberto Lodge,
            <br /> Lake Kendallville,
            <br />s Colorado - 97392, Bhutan
          </p>
        </div>
      </div>
      <hr className="w-full md:w-[200px] h-px bg-black border-0 my-5"></hr>

      <div className="flex justify-start gap-5 items-center  text-[27px]">
        <FaLinkedin className="text-[#9FA0A1] hover:text-[#115CD9]" />
        <FaTwitter className="text-[#9FA0A1] hover:text-[#115CD9]" />
      </div>
    </div>
  );
};

export default Phase3;
