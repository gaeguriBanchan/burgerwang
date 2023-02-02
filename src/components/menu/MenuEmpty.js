import logo from "../../assets/images/logo.png";
const MenuEmpty = () => {
  return (
    <div className="flex flex-col items-center px-20 py-16">
      <img src={logo} alt="버거왕" className="w-52" />
      <p className="mt-8 text-2xl font-black text-9a918c">메뉴 준비중 입니다.</p>
    </div>
  );
};

export default MenuEmpty;
