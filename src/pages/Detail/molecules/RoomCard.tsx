import { MdOutlineBed } from "react-icons/all";

const RoomCard = () => {
  return (
    <div className="border p-3 rounded">
      <MdOutlineBed className="text-3xl" />
      <div className="mt-3">Kamar Tidur 1</div>
      <div className="text-sm text-slate-500">Tempat tidur ganda</div>
    </div>
  );
};

export default RoomCard;
