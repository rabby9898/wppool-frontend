import { IoMdSearch } from "react-icons/io";
import CompanyTable from "./ComapanyTable";

const AllCompanies = () => {
  return (
    <div className="w-full mt-8 bg-white rounded-xl py-8 md:py-16 px-5 md:px-20">
      <div className="w-full flex justify-between items-center">
        <div className="w-full">
          <h1 className="text-5xl font-nantes">All companies</h1>
        </div>
        <div className="relative font-nantes w-full">
          <input
            type="text"
            placeholder="Search Companies"
            className="input input-bordered w-full px-12 text-[#191618] h-[60px] text-2xl bg-[#ededed]"
          />
          <IoMdSearch className="absolute text-2xl top-[15px] text-[#191618] left-[18px]" />
        </div>
      </div>
      <div>
        <CompanyTable />
      </div>
    </div>
  );
};

export default AllCompanies;
