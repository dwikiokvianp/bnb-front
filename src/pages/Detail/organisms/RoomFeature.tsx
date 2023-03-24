import { MdOutlineBed } from "react-icons/all";
import RoomCard from "../molecules/RoomCard";

const RoomFeature = () => {
  return (
    <div className="grid grid-cols-2 gap-1">
      <RoomCard />
      <RoomCard />
    </div>
  );
};

export default RoomFeature;
