import { useContext, useEffect, useState } from "react";
import { getMenuDetail } from "../../api/menuApi";
import ModalMenuListItem from "./ModalMenuListItem";
import { MenuContext } from "./context/MenuContext";

const ModalMenuList = ({ setModalKind }) => {
  const [menuInfo, setMenuInfo] = useState({});
  const [menuList, setMenuList] = useState([]);
  const { manageValue, manageCart } = useContext(MenuContext);
  const { selectedMenu, setSelectedMenu, selectedMenuCate } = manageValue;
  const { addCartInfo, addToCart } = manageCart;
  const getDetailMenu = async () => {
    const res = await getMenuDetail(selectedMenuCate, selectedMenu);
    const { seq, name, detail, uri, seller } = res.list;
    setMenuInfo({ seq, name, detail, uri });
    setMenuList(seller);
  };
  const selectMenu = (menuData) => {
    const { seq, ingredientSelect, menuKind } = menuData;
    addCartInfo("menu", menuData);
    setSelectedMenu(seq);
    if (menuKind === "SINGLE") {
      addToCart();
      return;
    }
    if (!ingredientSelect) {
      setModalKind("side");
      return;
    }
    setModalKind("ingredient");
  };
  useEffect(() => {
    getDetailMenu();
  }, [selectedMenu, selectedMenu]);
  return (
    <div className="max-h-[600px] overflow-auto">
      <div className="flex items-center h-80 bg-menuselect bg-cover">
        <div className="ml-8">
          <p className="text-white text-4xl font-black">{menuInfo.name}</p>
          <p className="mt-2 text-white text-xl">{menuInfo.detail}</p>
        </div>
        <img src="" alt="" className="" />
      </div>
      <ul className="bg-background p-8">
        {menuList.map((item) => (
          <ModalMenuListItem key={item.seq} menuData={item} selectMenu={selectMenu} />
        ))}
      </ul>
    </div>
  );
};

export default ModalMenuList;
