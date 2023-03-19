import { MdPool } from "react-icons/all";
import FloatingSearch from "../Organisms/FloatingSearch";
import FilterBar from "../Organisms/FilterBar";
import UserNavigation from "../Organisms/UserNavigation";

const Header = () => {
  return (
    <>
      <FloatingSearch />
      <UserNavigation />
      {/*<FilterBar />*/}
    </>
  );
};

export default Header;
