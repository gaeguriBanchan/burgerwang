import ModalHeader from "../base/Modal/ModalHeader";
import ModalCartIngredient from "./ModalCartIngredient";
import ModalCartSide from "./ModalCartSide";
import ModalCartDrink from "./ModalCartDrink";

const ModalCart = ({ closeModal, optionInfo, menuSeq, date }) => {
  const { optiontype, optioninfo } = optionInfo;
  const getModalTitle = () => {
    if (optiontype === "ingredient") {
      return "재료 변경";
    }
    if (optiontype === "side") {
      return "사이드 변경";
    }
    if (optiontype === "drink1" || optiontype === "drink2") {
      return "음료 변경";
    }
  };
  return (
    <>
      <ModalHeader title={getModalTitle()} closeModal={closeModal} />
      {optiontype === "ingredient" && (
        <ModalCartIngredient
          menuSeq={menuSeq}
          optiontype={optiontype}
          optioninfo={optioninfo}
          date={date}
          closeModal={closeModal}
        />
      )}
      {optiontype === "side" && (
        <ModalCartSide
          menuSeq={menuSeq}
          optiontype={optiontype}
          optioninfo={optioninfo}
          date={date}
          closeModal={closeModal}
        />
      )}
      {(optiontype === "drink1" || optiontype === "drink2") && (
        <ModalCartDrink
          menuSeq={menuSeq}
          optiontype={optiontype}
          optioninfo={optioninfo}
          date={date}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ModalCart;
