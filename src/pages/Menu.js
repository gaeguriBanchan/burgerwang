import React, { useEffect, useState } from "react";
import TabButton from "../components/base/TabButton";
import Food from "../components/menu/Food";
import { getMenu } from "../api/menuApi";
const Menu = () => {
  const [menuList, setMenuList] = useState([]);
  const [selectedMenu, changeSelectedMenu] = useState("1");
  const setMenu = async () => {
    const res = await getMenu(selectedMenu);
    const { event, burger, side, drink, dog } = res.list;
    const updateList = [];
    if (event !== undefined) {
      updateList.push(...event);
    }
    if (burger !== undefined) {
      updateList.push(...burger);
    }
    if (side !== undefined) {
      updateList.push(...side);
    }
    if (drink !== undefined) {
      updateList.push(...drink);
    }
    if (dog !== undefined) {
      updateList.push(...dog);
    }
    console.log(updateList);
    setMenuList(updateList);
  };
  useEffect(() => {
    setMenu();
  }, [selectedMenu]);
  const list = menuList.map((item) => <Food key={item.seq} menu={item} />);
  return (
    <>
      <div className="container max-w-6xl px-5 m-auto">
        <div className="flex justify-between mb-14 mt-9">
          <span className="text-4xl font-black">메뉴</span>
          <ul className="flex">
            <TabButton value="1" selectedValue={selectedMenu} changeEvent={changeSelectedMenu}>
              스페셜&할인팩
            </TabButton>
            <TabButton value="2" selectedValue={selectedMenu} changeEvent={changeSelectedMenu}>
              신제품(NEW)
            </TabButton>
            <TabButton value="3" selectedValue={selectedMenu} changeEvent={changeSelectedMenu}>
              프리미엄
            </TabButton>
            <TabButton value="4" selectedValue={selectedMenu} changeEvent={changeSelectedMenu}>
              와퍼&주니어
            </TabButton>
            <TabButton value="5" selectedValue={selectedMenu} changeEvent={changeSelectedMenu}>
              치킨&슈림프버거
            </TabButton>
            <TabButton value="6" selectedValue={selectedMenu} changeEvent={changeSelectedMenu}>
              사이드
            </TabButton>
            <TabButton value="7" selectedValue={selectedMenu} changeEvent={changeSelectedMenu}>
              음료&디저트
            </TabButton>
            <TabButton value="8" selectedValue={selectedMenu} changeEvent={changeSelectedMenu}>
              독퍼
            </TabButton>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-x-9 gap-y-28 mt-20">{list}</div>
      </div>
    </>
  );
};

export default Menu;
