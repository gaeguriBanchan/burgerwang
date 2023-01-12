/** @format */

import { Outlet } from "react-router";

const Header = () => {
  return (
    <>
      <div className="w-full bg-red-500">헤더</div>
      <Outlet />
    </>
  );
};

export default Header;
