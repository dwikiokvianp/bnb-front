import Header from "./templates/Header";
import Main from "./templates/Main";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
