import { useEffect, useMemo } from "react";
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
  const eventDrink = async (seq) => {
    const { list } = await getMenuDrink(seq);
    const defaultDrink = list.filter((item) => item.drinkOptSeq === 42);
    return defaultDrink;
  };
  const addMenu = (data) => {
    const { price } = data;
    cart = { date: Date.now(), menuInfo: data, count: 1, totalPrice: price };
  };
  const addEventMenu = (data) => {
    const { seq, price } = data;
    // const defaultDrink = eventDrink(seq).then((res) => {
    //   return res;
    // });
    // console.log(defaultDrink);
    cart = {
      date: Date.now(),
      menuInfo: data,
      count: 1,
      drinkInfo: [
        {
          drinkOptSeq: 42,
          drinkOptName: "콜라R",
          drinkOptPrice: 0,
          drinkOptSize: 1,
          drinkOptFile: "drinkOpt_1675065950591.png",
          drinkOptUri: "콜라R",
        },
      ],
      drink2Info: [
        {
          drinkOptSeq: 42,
          drinkOptName: "콜라R",
          drinkOptPrice: 0,
          drinkOptSize: 1,
          drinkOptFile: "drinkOpt_1675065950591.png",
          drinkOptUri: "콜라R",
        },
      ],
      totalPrice: price,
    };
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
      dispatch(addCartList(cart));
      navigate("/cart");
    };
    return { addCartInfo, addToCart };
  }, []);

  const value = { manageValue, manageCart };

  return <MenuContext.Provider value={value} {...props} />;
};
