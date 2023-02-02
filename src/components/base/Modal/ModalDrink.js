import ModalDrinkItem from "./ModalDrinkItem";

const ModalDrink = ({ drinkList, selectItem, setSelectItem }) => {
  return (
    <div className="max-h-[530px] overflow-auto">
      <ul className="bg-background p-8 flex justify-between flex-wrap">
        {drinkList.map((item) => (
          <ModalDrinkItem
            key={item.drinkOptSeq}
            drinkData={item}
            selectItem={selectItem}
            setSelectItem={setSelectItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ModalDrink;
