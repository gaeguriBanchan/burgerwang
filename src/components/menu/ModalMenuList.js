import { useContext, useEffect, useState } from "react";
import { getMenuDetail } from "../../api/menuApi";
import ModalMenuListItem from "./ModalMenuListItem";
import { MenuContext } from "./context/MenuContext";

const ModalMenuList = ({ setModalKind }) => {
  const [menuInfo, setMenuInfo] = useState({});
  const [menuList, setMenuList] = useState([]);
  const { manageValue, manageCart } = useContext(MenuContext);
  const { selectedMenu, setSelectedMenu, selectedMenuCate } = manageValue;
  const { addCartInfo } = manageCart;
  const getDetailMenu = async () => {
    const res = await getMenuDetail(selectedMenuCate, selectedMenu);
    const { seq, name, detail, uri, seller } = res.list;
    setMenuInfo({ seq, name, detail, uri });
    setMenuList(seller);
  };
  const selectMenu = (data) => {
    const { seq, ingredientSelect, menuKind } = data;
    setSelectedMenu(seq);
    let isDone = false;
    if (menuKind === "SINGLE") {
      isDone = true;
      addCartInfo({ type: "menu", data, isDone });
      return;
    }
    addCartInfo({ type: "menu", data, isDone });
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
      <div className="relative flex items-center h-80 bg-menuselect bg-cover">
        <div className="mx-8 pr-56">
          <p className="text-white text-4xl font-black whitespace-nowrap">{menuInfo.name}</p>
          <p className="mt-2 text-white text-xl">{menuInfo.detail}</p>
        </div>
        <div className="absolute right-[-40px] top-[50%] translate-y-[-50%] h-60">
          {menuInfo.uri && (
            <img
              src={`${process.env.REACT_APP_IMAGE_URL}/${selectedMenuCate}/${menuInfo.uri}`}
              alt={menuInfo.name}
              className="h-full"
            />
          )}
        </div>
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
