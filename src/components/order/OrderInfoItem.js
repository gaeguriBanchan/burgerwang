import OrderInfoItemOptions from "./OrderInfoItemOptions";
import { useState } from "react";
import OrderInfoItemOptionOne from "./OrderInfoItemOptionOne";

const OrderInfoItem = ({ order }) => {
  const { drink, drink2, eventName, ingredient, menuName, odCount, price, side } = order;
  const [orderCount, setOrderCount] = useState(odCount);
  const plusOrderCount = () => setOrderCount(orderCount + 1);
  const minusOrderCount = () => orderCount > 1 && setOrderCount(orderCount - 1);
  // };
  return (
    <li className="pt-14 border-b border-ededed">
      <div className="pb-10 border-b border-ededed">
        <p className="text-4xl font-black">{menuName}</p>
        <p className="text-xl mt-3 text-8d8d8d font-black">구성품 리스트 없으면 안 보임</p>
        <p className="text-3xl mt-3 font-black">{price}</p>
      </div>
      <ul className="py-8 border-b border-ededed border-dashed">
        {ingredient && ingredient.length > 0 && (
          <OrderInfoItemOptions kind="재료추가" option={ingredient} />
        )}
        {side && (
          <OrderInfoItemOptionOne kind="사이드" name={side.sideName} price={side.sidePrice} />
        )}
        {drink && (
          <OrderInfoItemOptionOne
            kind={drink2.length > 0 ? "음료1" : "음료"}
            name={drink.drinkName}
            price={drink.drinkPrice}
          />
        )}
        {drink2 && (
          <OrderInfoItemOptionOne kind="음료2" name={drink2.drinkName} price={drink2.drink2Price} />
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
          <span className="text-3xl text-bgwred font-black">{orderCount * price}</span>
        </div>
      </div>
    </li>
  );
};

export default OrderInfoItem;
