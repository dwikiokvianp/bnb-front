import { MdOutlineBed } from "react-icons/all";
import RoomFeature from "../organisms/RoomFeature";
import TitleSection from "../atoms/TitleSection";

const YourRoom = () => {
  return (
    <section className="container mx-auto p-2 sm:p-0">
      <div className="font-semibold text-lg">
        <TitleSection title={"Kamar Anda"} />
        <RoomFeature />
      </div>
    </section>
  );
};
export default YourRoom;
