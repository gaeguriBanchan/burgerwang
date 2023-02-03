import React from "react";
import Menu from "../../pages/Menu";
import { MenuContextProvider } from "./context/MenuContext";
const MenuContainer = () => {
  return (
    <MenuContextProvider>
      <Menu />
    </MenuContextProvider>
  );
};

export default MenuContainer;
