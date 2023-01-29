import convertPrice from "../../utils/convertPrice";
const Food = ({ menu, selectMenuHandler }) => {
  const { cate, seq, name, count, uri, detail, price, soldout } = menu;
  return (
    <>
      <div className="grid grid-rows-none" onClick={() => selectMenuHandler(menu, cate, seq)}>
        <div className="relative">
          <img
            className="flex justify-center"
            src="https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/d33eb7d4-f31f-48a8-a921-5cbb9136f5f6.png"
            alt=""
          />
          {menu.new && (
            <span className="absolute left-0 top-0 w-12 h-9 bg-icon-new bg-no-repeat"></span>
          )}
          {menu.best && (
            <span className="absolute left-0 top-0 w-12 h-9 bg-icon-best bg-no-repeat"></span>
          )}
        </div>
        <span className="flex justify-center font-JUA text-xl">{name}</span>
        {detail && (
          <span className="flex justify-center text-center font-JUA text-xl text-8d8d8d">
            {detail}
          </span>
        )}
        <span className="flex justify-center font-JUA text-xl font-black text-bgwred">
          \{convertPrice(price)}
          {count > 1 && "~"}
        </span>
      </div>
    </>
  );
};

export default Food;
