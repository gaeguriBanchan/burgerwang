import React, { useEffect, useState } from "react";
import { getMenuDetail, getMenuDrink, getMenuIngredient, getMenuSide } from "../../api/menuApi";
import ModalHeader from "./ModalHeader";
import ModalMenuItem from "./ModalMenuItem";
import { useNavigate } from "react-router";
import ModalMenuIngredient from "./ModalMenuIngredient";
import ModalMenuSide from "./ModalMenuSide";
import ModalMenuDrink from "./ModalMenuDrink";

const ModalMenu = ({ closeModal, menuCate, menuSeq }) => {
  const navigate = useNavigate();
  const [menuInfo, setMenuInfo] = useState({});
  const [menuList, setMenuList] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [modalKind, setModalKind] = useState("menu");
  const [ingredientList, setIngeidientList] = useState([]);
  const [sideList, setSideList] = useState([]);
  const [drinkList, setDrinkList] = useState([]);
  const getDetailMenu = async () => {
    const res = await getMenuDetail(menuCate, menuSeq);
    const { seq, name, detail, uri, seller } = res.list;
    setMenuInfo({ seq, name, detail, uri });
    setMenuList(seller);
  };
  const getIngredient = async (seq) => {
    const res = await getMenuIngredient(seq);
    setIngeidientList(res.list);
  };
  const getSide = async (seq) => {
    const res = await getMenuSide(seq);
    setSideList(res.list);
  };
  const getDrink = async (seq) => {
    const res = await getMenuDrink(seq);
    setDrinkList(res.list);
  };
  useEffect(() => {
    getDetailMenu();
  }, [menuCate, menuSeq]);

  /////// 메뉴 선택 시
  const selectMenu = (menuData) => {
    const { seq, ingredientSelect, menuKind } = menuData;
    setSelectedMenu(seq);
    if (menuKind === "SINGLE") {
      navigate("/cart");
      return;
    }
    if (!ingredientSelect) {
      setModalKind("side");
      return;
    }
    getIngredient(selectedMenu);
    setModalKind("ingredient");
  };

  /////////////재료 추가 이벤트
  const addIngredient = () => {
    getSide(selectedMenu);
    setModalKind("side");
  };
  const cancelIngredient = () => {
    getSide(selectedMenu);
    setModalKind("side");
  };

  ///////// 사이드 추가 이벤트
  const selectSide = () => {
    getDrink(selectedMenu);
    setModalKind("drink");
  };

  ////////// 드링크 추가 이벤트
  const selectDrink = () => {
    navigate("/cart");
  };

  /////모달 타이틀 지정
  const getModalTitle = () => {
    if (modalKind === "menu") {
      return "메뉴 선택";
    }
    if (modalKind === "ingredient") {
      return "재료 추가";
    }
    if (modalKind === "side") {
      return "사이드 변경";
    }
    if (modalKind === "drink") {
      return "드링크 변경";
    }
  };

  return (
    <>
      <ModalHeader title={getModalTitle()} closeModal={closeModal} />
      {modalKind === "menu" && (
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
              <ModalMenuItem key={item.seq} menuData={item} selectMenu={selectMenu} />
            ))}
          </ul>
        </div>
      )}
      {modalKind === "ingredient" && (
        <>
          <div className="max-h-[530px] overflow-auto">
            <ul className="bg-background p-8">
              {ingredientList.map((item) => (
                <ModalMenuIngredient key={item.ingredirentSeq} ingredientData={item} />
              ))}
            </ul>
          </div>
          <div className="flex w-full">
            <button onClick={() => addIngredient()} className="w-3/6 px-4 py-4 bg-2e2e2e">
              <span className="text-white font-black text-3xl">추가안함</span>
            </button>
            <button onClick={() => cancelIngredient()} className="w-3/6 px-4 py-4 bg-bgwred">
              <span className="text-white font-black text-3xl">추가하기</span>
            </button>
          </div>
        </>
      )}
      {modalKind === "side" && (
        <>
          <div className="max-h-[530px] overflow-auto">
            <ul className="bg-background p-8 flex justify-between flex-wrap">
              {sideList.map((item) => (
                <ModalMenuSide key={item.sideOptSeq} sideData={item} />
              ))}
            </ul>
          </div>
          <button onClick={() => selectSide()} className="w-full px-4 py-5 bg-bgwred">
            <span className="text-white font-black text-3xl">선택</span>
          </button>
        </>
      )}
      {modalKind === "drink" && (
        <>
          <div className="max-h-[530px] overflow-auto">
            <ul className="bg-background p-8 flex justify-between flex-wrap">
              {drinkList.map((item) => (
                <ModalMenuDrink key={item.drinkOptSeq} drinkData={item} />
              ))}
            </ul>
          </div>
          <button onClick={() => selectDrink()} className="w-full px-4 py-5 bg-bgwred">
            <span className="text-white font-black text-3xl">선택</span>
          </button>
        </>
      )}
    </>
  );
};

export default ModalMenu;
