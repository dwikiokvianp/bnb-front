import { HiSearch } from "react-icons/all";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div className="shadow-lg m-4 rounded-3xl text-sm ">
            <div className="flex items-center">
              <HiSearch className="text-xl text-slate-400 ml-2" />
              <div className="p-3">
                <p className="font-bold">Ke mana saja</p>
                <div className="flex text-xs font-bold">
                  <p className="font-light text-slate-800">Minggu mana pun</p>
                  <p>-</p>
                  <p className="font-light text-slate-800">Tambahkan tamu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
