/** @format */

import { Outlet } from 'react-router';

const Header = () => {
  return (
    <div className="w-full bg-black">
      <Outlet />
    </div>
  );
};

export default Header;
