import React from "react";
import Menu from "../../pages/Menu";
import { MenuContextProvider } from "./context/MenuContext";
import { useDispatch } from "react-redux";
const MenuContainer = () => {
  return (
    <MenuContextProvider>
      <Menu />
    </MenuContextProvider>
  );
};

export default MenuContainer;
