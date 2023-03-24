import TitleSection from "../atoms/TitleSection";
import {
  AiOutlineWifi,
  MdOutlineAddHomeWork,
  MdOutlinePool,
  TbToolsKitchen2,
} from "react-icons/all";

const Facility = () => {
  return (
    <div className="container mx-auto p-2 sm:p-0 text-slate-700">
      <TitleSection title={"Fasilitas yang ditawarkan"} />
      <div className="flex items-center gap-x-2 my-2">
        <TbToolsKitchen2 className="text-3xl" />
        <p>Dapur</p>
      </div>
      <div className="flex items-center gap-x-2 my-2">
        <AiOutlineWifi className="text-3xl" />
        <p>Wifi</p>
      </div>
      <div className="flex items-center gap-x-2 my-2">
        <MdOutlineAddHomeWork className="text-3xl" />
        <p>Area Kerja Khusus</p>
      </div>
      <div className="flex items-center gap-x-2 my-2">
        <MdOutlinePool className="text-3xl" />
        <p>Kolam Renang Pribadi</p>
      </div>
      <div className="flex items-center gap-x-2 my-2">
        <TbToolsKitchen2 className="text-3xl" />
        <p>Dapur</p>
      </div>
    </div>
  );
};

export default Facility;
