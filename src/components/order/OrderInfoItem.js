import OrderInfoItemOption from "./OrderInfoItemOption";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeCount } from "../../reducer/cartReducer";

const OrderInfoItem = ({ order }) => {
  const dispatch = useDispatch();
  const { cartSeq, count, name, event, side, drink, drink2, ingredient, totalprice } = order;
  const [orderCount, setOrderCount] = useState(count);
  const plusOrderCount = () => {
    setOrderCount(orderCount + 1);
  };
  const minusOrderCount = () => {
    if (orderCount > 1) {
      setOrderCount(orderCount - 1);
    }
  };
  useEffect(() => {
    dispatch(changeCount({ cartSeq, orderCount }));
  }, [orderCount]);
  // };
  return (
    <li className="pt-14 border-b border-ededed">
      <div className="pb-10 border-b border-ededed">
        <p className="text-4xl font-black">{name}</p>
        {event && <p className="text-xl mt-3 text-8d8d8d font-black">{event}</p>}
        <p className="text-3xl mt-3 font-black">{totalprice}</p>
      </div>
      <ul className="py-8 border-b border-ededed border-dashed">
        {ingredient && ingredient.length > 0 && (
          <OrderInfoItemOption kind="재료추가" optionname="재료추가" optioninfo={ingredient} />
        )}
        {side && side.length > 0 && <OrderInfoItemOption optionname="사이드" optioninfo={side} />}
        {drink && drink.length > 0 && (
          <OrderInfoItemOption
            optionname={drink2.length > 0 ? "음료1" : "음료"}
            optioninfo={drink}
          />
        )}
        {drink2 && drink2.length > 0 && (
          <OrderInfoItemOption optionname="음료2" optioninfo={drink2} />
        )}
      </ul>
      <div className="py-8 flex items-center">
        <div className="w-3/6 flex items-center">
          <span className="w-32 text-xl font-black">수량</span>
          <div className="drop-shadow-md">
            <button
              onClick={() => minusOrderCount()}
              className="w-10 h-10 text-xl font-black bg-d9d9d9 rounded-l"
            >
              -
            </button>
            <input
              type="text"
              className="w-12 h-10 text-xl font-black text-center bg-white outline-none"
              value={orderCount}
              readOnly
            />
            <button
              onClick={() => plusOrderCount()}
              className="w-10 h-10 text-xl font-black bg-d9d9d9 rounded-r"
            >
              +
            </button>
          </div>
        </div>
        <div className="w-3/6 flex justify-between items-center">
          <span className="text-xl font-black">합계금액</span>
          <span className="text-3xl text-bgwred font-black">{orderCount * totalprice}</span>
        </div>
      </div>
    </li>
  );
};

export default OrderInfoItem;
