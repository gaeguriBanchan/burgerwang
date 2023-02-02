import React, { useEffect, useState } from "react";
import MenuCategory from "../components/menu/MenuCategory";
import MenuList from "../components/menu/MenuList";
import { getMenu } from "../api/menuApi";
import MenuEmpty from "../components/menu/MenuEmpty";
import { useSelector } from "react-redux";
import { getStore } from "../api/commonApi";
import Modal from "../components/base/Modal/Modal";
import ModalCheckAddress from "../components/base/Modal/ModalCheckAddress";
import CartButton from "../components/menu/CartButton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../components/base/Layout";
const Menu = () => {
  const [storeSeq, setStoreSeq] = useState(0);
  const [storeName, setStoreName] = useState("");
  const [deliAddress, setDeliAddress] = useState("");
  const [menuList, setMenuList] = useState([]);
  const [selectedCategory, changeSelectedCategory] = useState("1");
  const setMenu = async () => {
    if (storeSeq !== 0) {
      await getMenu(selectedCategory, storeSeq)
        .then((menu) => {
          const { event, burger, side, drink, dog } = menu.list;
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
        })
        .catch((err) => {
          setMenuList([]);
          console.log(err);
        });
    }
  };
  useEffect(() => {
    setMenu();
  }, [selectedCategory, storeSeq]);
  const address = useSelector((state) => state.address);
  const { addressJibun, addressRoad, addressDetail } = address;
  useEffect(() => {
    Object.keys(address).length === 0 ? openModal() : setStore();
  }, [address]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const setStore = async () => {
    const fullAddress = `${addressRoad ? addressRoad : addressJibun} ${addressDetail}`;
    await getStore(fullAddress)
      .then((storeData) => {
        const { status, message, store } = storeData;
        if (status) {
          const { seq } = store;
          setStoreSeq(seq);
        }
      })
      .catch();
  };
  const setStoreModal = async ({ addressJibun, addressRoad, addressDetail }) => {
    const fullAddress = `${addressRoad ? addressRoad : addressJibun} ${addressDetail}`;
    await getStore(fullAddress)
      .then((storeData) => {
        const { status, message, store } = storeData;
        if (status) {
          const { seq } = store;
          setStoreSeq(seq);
          closeModal();
        } else {
          alert(`${message} 다른 주소를 선택해 주세요.`);
        }
      })
      .catch((err) => {
        alert("에러가 발생하였습니다. 다시 시도해 주세요.");
        console.log(err);
      });
  };
  return (
    <>
      <Helmet>
        <title>메뉴</title>
      </Helmet>
      <Layout>
        <div className="container max-w-6xl px-5 m-auto">
          <div className="flex justify-between mb-14 mt-9">
            <h2 className="text-4xl font-black">메뉴</h2>
            {menuList.length !== 0 && (
              <MenuCategory
                selectedCategory={selectedCategory}
                changeSelectedCategory={changeSelectedCategory}
              />
            )}
          </div>
          {menuList.length !== 0 ? <MenuList menuList={menuList} /> : <MenuEmpty />}
        </div>
        <Modal modalIsOpen={modalIsOpen}>
          <ModalCheckAddress
            closeModal={closeModal}
            setStoreModal={setStoreModal}
          ></ModalCheckAddress>
        </Modal>
        <Link to="/cart">
          <CartButton />
        </Link>
      </Layout>
    </>
  );
};

export default Menu;
