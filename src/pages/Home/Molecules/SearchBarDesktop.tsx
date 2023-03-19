import { CgSearch } from "react-icons/all";

const SearchBarDesktop = () => {
  return (
    <div className="flex flex-1 justify-start shadow-lg border p-2 py-4 rounded-xl max-w-md items-center ">
      <div className="flex gap-x-2 text-slate-600 font-bold ">
        <p className="overflow-hidden overflow-ellipsis ">Ke mana saja</p>
        <p className="border-r-2"></p>
        <p>Minggu mana pun</p>
        <p className="border-r-2"></p>
        <p className="text-slate-400">Tambahkan tamu</p>
        <div className="bg-red-500 rounded-full p-1 text-sm text-white flex items-center justify-center">
          <CgSearch className="font-bold" />
        </div>
      </div>
    </div>
  );
};
export default SearchBarDesktop;
