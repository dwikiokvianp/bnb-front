import CompanyLogo from "../atoms/CompanyLogo";
import SearchBarDesktop from "../Molecules/SearchBarDesktop";
import {
  AiOutlineUser,
  BsGlobe,
  CgMenu,
  CgUser,
  FaHouseUser,
  FaUser,
  MdVerifiedUser,
  TbUserCircle,
} from "react-icons/all";

const UserNavigation = () => {
  return (
    <>
      <div className="hidden md:block">
        <section>
          <div className="font-medium text-slate-600 text-center bg-slate-100 p-4">
            Tampilkan harga total di muka
            <p className="ml-2 inline underline">Pelajari lebih lanjut</p>
          </div>
        </section>
        <section className="border-b-2 border-t-2">
          <div className="flex p-4 px-5 2xl:w-[80%] 2xl:mx-auto items-center">
            <CompanyLogo />
            <SearchBarDesktop />
            <div className="flex flex-1 justify-end gap-x-4 ">
              <div className="flex items-center p-2 px-3 hover:bg-slate-100 rounded-2xl text-slate-600 font-semibold">
                Jadikan rumah Anda Airbnb
              </div>
              <div className="flex items-center text-xl hover:bg-slate-100 rounded-full p-3">
                <BsGlobe />
              </div>
              <div className="flex border-2 hover:shadow-lg rounded text-2xl justify-center items-center px-4 py-2 rounded-3xl gap-1">
                <CgMenu className="text-xl" />
                <TbUserCircle className="text-slate-600" />
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserNavigation;
