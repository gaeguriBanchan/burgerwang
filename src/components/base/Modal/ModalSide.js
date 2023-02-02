import ModalSideItem from "./ModalSideItem";

const ModalSide = ({ sideList, selectItem, setSelectItem }) => {
  return (
    <div className="max-h-[530px] overflow-auto">
      <ul className="bg-background p-8 flex justify-between flex-wrap">
        {sideList.map((item) => (
          <ModalSideItem
            key={item.sideOptSeq}
            sideData={item}
            selectItem={selectItem}
            setSelectItem={setSelectItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ModalSide;
