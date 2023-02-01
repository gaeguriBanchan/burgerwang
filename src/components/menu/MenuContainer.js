import React from "react";
import Menu from "../../pages/Menu";
import { MenuContextProvider } from "./context/MenuContext";
import { useDispatch } from "react-redux";
import { setTitle } from "../../reducer/headerSlice";
const MenuContainer = () => {
  // 김재진
  const disptach = useDispatch();
  disptach(setTitle({ title: "메뉴보기" }));
  return (
    <MenuContextProvider>
      <Menu />
    </MenuContextProvider>
  );
};

export default MenuContainer;
