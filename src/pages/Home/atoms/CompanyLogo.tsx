import { FaAirbnb } from "react-icons/all";

const CompanyLogo = () => {
  return (
    <div className="flex flex-1 justify-start items-center ">
      <FaAirbnb className="text-5xl text-red-500" />
      <p className="font-bold text-red-500 hidden xl:block text-xl">airbnb</p>
    </div>
  );
};

export default CompanyLogo;
