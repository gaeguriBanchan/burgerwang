import convertPrice from "../../utils/convertPrice";
const Food = ({ menu, selectMenuHandler }) => {
  const { cate, seq, name, count, uri, detail, price, soldout } = menu;
  return (
    <>
      <div className="max-w-110 flex flex-col" onClick={() => selectMenuHandler(menu, cate, seq)}>
        <div className="relative  px-2 flex justify-center">
          <div className="w-full h-auto">
            {uri && (
              <img
                className="w-full h-full"
                src={`${process.env.REACT_APP_IMAGE_URL}/${cate}/${uri}`}
                alt={name}
              />
            )}
            {soldout && (
              <span className="block absolute w-full h-full left-0 top-0 bg-icon-soldout bg-no-repeat bg-contain"></span>
            )}
            {menu.new && (
              <span className="absolute left-0 top-0 w-12 h-9 bg-icon-new bg-no-repeat"></span>
            )}
            {menu.best && (
              <span className="absolute left-0 top-0 w-12 h-9 bg-icon-best bg-no-repeat"></span>
            )}
          </div>
        </div>
        <div className="mt-4">
          <span className="flex justify-center font-JUA text-xl">{name}</span>
          {detail && (
            <span className="flex justify-center text-center font-JUA text-xl text-8d8d8d">
              {detail}
            </span>
          )}
          <span className="flex justify-center font-JUA text-2xl font-black text-bgwred">
            \{convertPrice(price)}
            {count > 1 && "~"}
          </span>
        </div>
      </div>
    </>
  );
};

export default Food;
