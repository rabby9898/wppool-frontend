import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
const Phase3 = () => {
  return (
    <div>
      <div>
        <div>
          <h5 className="text-xl font-sans font-bold text-[#191618]">
            Cambridge
          </h5>
          <p className="text-[#191618] text-xl font-sans">
            70728 Yost Burg, <br /> North Magdaleneview, <br /> UT 97952-2814
          </p>
        </div>
        <hr className="h-px bg-black border-0 my-5"></hr>
        <div>
          <h5 className="text-xl font-sans font-bold text-[#191618]">London</h5>
          <p className="text-[#191618] text-xl font-sans">
            Suite 292 903 Stehr Streets, <br />
            Langworthtown, SC 94577-9465
          </p>
        </div>
        <hr className="h-px bg-black border-0 my-5"></hr>

        <div>
          <h5 className="text-xl font-sans font-bold text-[#191618]">
            San Francisco
          </h5>
          <p className="text-[#191618] text-xl font-sans">
            19837 Gilberto Lodge,
            <br /> Lake Kendallville,
            <br />s Colorado - 97392, Bhutan
          </p>
        </div>
      </div>
      <hr className="h-px bg-black border-0 my-5"></hr>

      <div className="flex justify-start gap-5 items-center text-[#9FA0A1] text-[27px]">
        <FaLinkedin />
        <FaTwitter />
      </div>
    </div>
  );
};

export default Phase3;
