import { MdPool } from "react-icons/all";

interface FilterCardBarProps {
  filterName: string;
}

const FilterCardBar = ({ filterName }: FilterCardBarProps) => {
  return (
    <div className="flex flex-col justify-content-center items-center">
      <MdPool className="text-4xl text-slate-400" />
      <div className="text-md text-slate-400">{filterName}</div>
    </div>
  );
};

export default FilterCardBar;
