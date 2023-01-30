import { useEffect, useMemo } from "react";
import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addCartList } from "../../../reducer/cartReducer";
import { useNavigate } from "react-router";

export const MenuContext = createContext();
export const MenuContextProvider = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedMenuCate, setSelectedMenuCate] = useState("");
  let cart = {};
  const addMenu = (data) => {
    const { price } = data;
    cart = { date: Date.now(), menuInfo: data, count: 1, totalPrice: price };
  };
  const addEventMenu = (data) => {
    const { price } = data;
    cart = { date: Date.now(), menuInfo: data, count: 1, drink: [], drink2: [], totalPrice: price };
  };
  const addIngredient = (data) => {
    let updatePrice = cart.totalPrice;
    data.forEach((item) => (updatePrice += item.ingredientPrice));
    cart = { ...cart, ingredientInfo: [...data], totalPrice: updatePrice };
  };
  const addSide = (data) => {
    const { sideOptPrice } = data;
    const updatePrice = cart.totalPrice + sideOptPrice;
    cart = { ...cart, sideInfo: [data], totalPrice: updatePrice };
  };
  const addDrink = (data) => {
    const { drinkOptPrice } = data;
    const updatePrice = cart.totalPrice + drinkOptPrice;
    cart = { ...cart, drinkInfo: [data], totalPrice: updatePrice };
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
    const addCartInfo = (type, data) => {
      type === "menu" && addMenu(data);
      type === "event" && addEventMenu(data);
      type === "ingredient" && addIngredient(data);
      type === "side" && addSide(data);
      type === "drink" && addDrink(data);
    };
    const addToCart = () => {
      console.log("move", cart);
      dispatch(addCartList(cart));
      navigate("/cart");
    };
    return { addCartInfo, addToCart };
  }, []);

  const value = { manageValue, manageCart };

  return <MenuContext.Provider value={value} {...props} />;
};
