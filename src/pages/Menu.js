import React, { useEffect, useState } from "react";
import TabButton from "../components/base/TabButton";
import Food from "../components/menu/Food";
import { getMenu } from "../api/menuApi";
import { useNavigate } from "react-router";
import Modal from "../components/menu/Modal";
import ModalMenu from "../components/menu/ModalMenu";
import { useContext } from "react";
import { MenuContext } from "../components/menu/context/MenuContext";
const Menu = () => {
  const navigate = useNavigate();
  const [menuList, setMenuList] = useState([]);
  const [selectedCategory, changeSelectedCategory] = useState("4");
  const [{ selectedMenuCate }, setSelectedMenu, setSelectedMenuCate, addCartInfo, addToCart] =
    useContext(MenuContext);
  const setMenu = async () => {
    const res = await getMenu(selectedCategory);
    const { event, burger, side, drink, dog } = res.list;
    const updateList = [];
    if (event !== undefined) {
      const updateData = event.map((item) => ({ ...item, cate: "event" }));
      updateList.push(...updateData);
    }
    if (burger !== undefined) {
      const updateData = burger.map((item) => ({ ...item, cate: "burger" }));
      updateList.push(...updateData);
    }
    if (side !== undefined) {
      const updateData = side.map((item) => ({ ...item, cate: "side" }));
      updateList.push(...updateData);
    }
    if (drink !== undefined) {
      const updateData = drink.map((item) => ({ ...item, cate: "drink" }));
      updateList.push(...updateData);
    }
    if (dog !== undefined) {
      const updateData = dog.map((item) => ({ ...item, cate: "dog" }));
      updateList.push(...updateData);
    }
    setMenuList(updateList);
  };
  useEffect(() => {
    setMenu();
  }, [selectedCategory]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const selectMenuHandler = (menu, cate, seq) => {
    setSelectedMenuCate(cate);
    setSelectedMenu(seq);
    const { count } = menu;
    if (count > 1) {
      openModal();
    } else {
      if (cate === "event") {
        addCartInfo("event", menu);
        addToCart();
        return;
      }
      addCartInfo("menu", menu);
      addToCart();
    }
  };
  const list = menuList.map((item) => (
    <Food key={item.seq} menu={item} selectMenuHandler={selectMenuHandler} />
  ));
  return (
    <>
      <div className="container max-w-6xl px-5 m-auto">
        <div className="flex justify-between mb-14 mt-9">
          <span className="text-4xl font-black">메뉴</span>
          <ul className="flex">
            <TabButton
              value="1"
              selectedValue={selectedCategory}
              changeEvent={changeSelectedCategory}
            >
              스페셜&할인팩
            </TabButton>
            <TabButton
              value="2"
              selectedValue={selectedCategory}
              changeEvent={changeSelectedCategory}
            >
              신제품(NEW)
            </TabButton>
            <TabButton
              value="3"
              selectedValue={selectedCategory}
              changeEvent={changeSelectedCategory}
            >
              프리미엄
            </TabButton>
            <TabButton
              value="4"
              selectedValue={selectedCategory}
              changeEvent={changeSelectedCategory}
            >
              와퍼&주니어
            </TabButton>
            <TabButton
              value="5"
              selectedValue={selectedCategory}
              changeEvent={changeSelectedCategory}
            >
              치킨&슈림프버거
            </TabButton>
            <TabButton
              value="6"
              selectedValue={selectedCategory}
              changeEvent={changeSelectedCategory}
            >
              사이드
            </TabButton>
            <TabButton
              value="7"
              selectedValue={selectedCategory}
              changeEvent={changeSelectedCategory}
            >
              음료&디저트
            </TabButton>
            <TabButton
              value="8"
              selectedValue={selectedCategory}
              changeEvent={changeSelectedCategory}
            >
              독퍼
            </TabButton>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-x-9 gap-y-28 mt-20">{list}</div>
      </div>
      <Modal modalIsOpen={modalIsOpen}>
        <ModalMenu
          closeModal={closeModal}
          menuCate={selectedMenuCate === "event" ? "burger" : selectedMenuCate}
        />
      </Modal>
    </>
  );
};

export default Menu;
