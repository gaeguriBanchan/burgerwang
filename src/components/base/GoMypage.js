import { useSelector, useDispatch } from "react-redux";
import profile from "../../assets/images/icon_profile.jpg";
import { useNavigate } from "react-router";

const GoMypage = () => {
  // 김재진 : 타이틀 출력
  const navigate = useNavigate();
  const disptach = useDispatch();
  const goMypage = () => {
    navigate("/mypage");
  };
  const userInfo = useSelector((state) => {
    return state.user;
  });
  return (
    <>
      <div className="flex justify-between gap-5 items-center">
        <div className="w-12 h-12">
          <img src={profile} alt="man" className="rounded-full" />
        </div>
        <div>
          <p className="text-xl text-white">김그린 님 안녕하세요</p>
          {/* 김재진 : 마이페이지이동 */}
          <span className="text-xl text-white font-black" onClick={goMypage}>
            MY왕 바로가기 {">"}
          </span>
        </div>
      </div>
    </>
  );
};

export default GoMypage;
