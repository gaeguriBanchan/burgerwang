import DefaultImage from "../../assets/images/logo.png";
const OrderListDetailListItem = () => {
  return (
    <li className="px-16 bg-white">
      <div className="py-8 flex justify-between border-b border-ededed border-dashed">
        <div className="flex justify-between items-center grow mr-12">
          <div className="w-48 h-32 flex justify-center items-center">
            <img src={DefaultImage} alt="상품 이미지" className="h-28" />
          </div>
          <div className="grow ml-12">
            <p className="text-2xl font-black">햄버거명</p>
            <p className="text-2xl mt-1 font-black">가격</p>
            <p className="text-xl mt-3 text-8d8d8d font-black">구구절절 설명 혹은 옵션</p>
          </div>
        </div>
        <div>
          <span className="px-3 py-2 bg-ededed">수량 몇개</span>
        </div>
      </div>
    </li>
  );
};

export default OrderListDetailListItem;
