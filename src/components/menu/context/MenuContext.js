import { useMemo } from "react";
import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addCartList } from "../../../reducer/cartReducer";
import { useNavigate } from "react-router";
import { getMenuDrink } from "../../../api/menuApi";

export const MenuContext = createContext();
export const MenuContextProvider = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedMenuCate, setSelectedMenuCate] = useState("");
  let cart = {};
  const addIngredientInfo = {
    ingredirentSeq: 84,
    ingredientName: "재료 추가",
    ingredientPrice: 400,
  };
  const addMenu = (data, isDone) => {
    const { price } = data;
    cart = { date: Date.now(), menuInfo: data, count: 1, totalPrice: price };
    isDone && addToCart();
  };
  const addEventMenu = async (data) => {
    const { seq, price } = data;
    await getMenuDrink(seq)
      .then((res) => {
        const { list } = res;
        const defaultDrink = list.filter((item) => item.drinkOptSeq === 42);
        cart = {
          date: Date.now(),
          menuInfo: data,
          count: 1,
          drinkInfo: defaultDrink,
          drink2Info: defaultDrink,
          totalPrice: price,
        };
        addToCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addIngredient = (data, isIFreeOver) => {
    let updatePrice = cart.totalPrice;
    let updateData = data;
    isIFreeOver && (updateData = [...updateData, addIngredientInfo]);
    updateData.forEach((item) => (updatePrice += item.ingredientPrice));
    cart = {
      ...cart,
      ingredientInfo: updateData,
      totalPrice: updatePrice,
    };
  };
  const addSide = (data) => {
    const { sideOptPrice } = data;
    const updatePrice = cart.totalPrice + sideOptPrice;
    cart = { ...cart, sideInfo: [data], totalPrice: updatePrice };
  };
  const addDrink = (data, isDone) => {
    const { drinkOptPrice } = data;
    const updatePrice = cart.totalPrice + drinkOptPrice;
    cart = { ...cart, drinkInfo: [data], totalPrice: updatePrice };
    isDone && addToCart();
  };
  const addToCart = () => {
    dispatch(addCartList(cart));
    navigate("/cart");
  };
  const manageValue = useMemo(() => {
    return {
      selectedMenu,
      selectedMenuCate,
      setSelectedMenu,
      setSelectedMenuCate,
    };
  }, [selectedMenu, selectedMenuCate]);

  const manageCart = useMemo(() => {
    const addCartInfo = ({ type, data, isDone, isIFreeOver }) => {
      type === "menu" && addMenu(data, isDone);
      type === "event" && addEventMenu(data);
      type === "ingredient" && addIngredient(data, isIFreeOver);
      type === "side" && addSide(data);
      type === "drink" && addDrink(data, isDone);
    };
    return { addCartInfo };
  }, []);

  const value = { manageValue, manageCart };

  return <MenuContext.Provider value={value} {...props} />;
};
