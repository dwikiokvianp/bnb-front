import { MdPool } from "react-icons/all";
import FilterCardBar from "../Molecules/FilterCardBar";

const filterBarConstant = [
  {
    id: 1,
    filterName: "Kolam Renang",
    icon: <MdPool className="text-4xl text-slate-400" />,
  },
  {
    id: 2,
    filterName: "Pemandangan Cantik",
    icon: <MdPool className="text-4xl text-slate-400" />,
  },
  {
    id: 3,
    filterName: "Desain Keren",
    icon: <MdPool className="text-4xl text-slate-400" />,
  },
];

const FilterBar = () => {
  return (
    <>
      <div className="flex p-5 gap-3">
        {filterBarConstant.map((filter) => {
          return (
            <FilterCardBar filterName={filter.filterName} key={filter.id} />
          );
        })}
      </div>
    </>
  );
};

export default FilterBar;
