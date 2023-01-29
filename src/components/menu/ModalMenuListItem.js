import convertPrice from "../../utils/convertPrice";
const ModalMenuListItem = ({ menuData, selectMenu }) => {
  const { seq, name, price, uri, explain, ingredientSelect, menuKind } = menuData;
  return (
    <li className="relative mb-4 w-full">
      <div className="bg-white py-6 pl-6 pr-40">
        <p className="text-2xl font-black">{name}</p>
        <p className="mt-1 text-l">{explain}</p>
        <p className="mt-2 text-bgwred text-2xl font-black">\{convertPrice(price)}</p>
      </div>
      <button
        onClick={() => selectMenu(menuData)}
        className="absolute left-0 top-0 w-full h-full z-20"
      ></button>
    </li>
  );
};

export default ModalMenuListItem;
