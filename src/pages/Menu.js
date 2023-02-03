import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMenu } from "../api/menuApi";
import Layout from "../components/base/Layout";
import MenuEmpty from "../components/menu/MenuEmpty";
import MenuList from "../components/menu/MenuList";
import MenuCategory from "../components/menu/MenuCategory";
import Modal from "../components/base/Modal/Modal";
import ModalCheckAddress from "../components/base/Modal/ModalCheckAddress";
import CartButton from "../components/menu/CartButton";
const Menu = () => {
  const [menuList, setMenuList] = useState([]);
  const [selectedCategory, changeSelectedCategory] = useState("1");
  const { storeSeq } = useSelector((state) => state.storeInfo);
  const setMenu = async () => {
    if (storeSeq) {
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
  useEffect(() => {
    !storeSeq && openModal();
  }, [storeSeq]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Helmet>
        <title>메뉴</title>
      </Helmet>
      <Layout>
        <div className="container max-w-6xl px-5 pb-16 m-auto ">
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
          <ModalCheckAddress closeModal={closeModal} />
        </Modal>
        <Link to="/cart">
          <CartButton />
        </Link>
      </Layout>
    </>
  );
};

export default Menu;
