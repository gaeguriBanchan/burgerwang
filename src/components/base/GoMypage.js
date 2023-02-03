import { useSelector, useDispatch } from 'react-redux';
import profile from '../../assets/images/icon_profile.jpg';
import { useNavigate } from 'react-router';
import { loginUser, clearUser } from '../../reducer/userSlice';

const GoMypage = () => {
  // 김재진 : 타이틀 출력
  const navigate = useNavigate();
  const disptach = useDispatch();
  const logOut = () => {
    disptach(clearUser());
    navigate('home')
  };
  const goMypage = () => {
    navigate('/mypage');
  };
  const userInfo = useSelector((state) => {
    return state.user;
  });
  return (
    <>
      <div className='flex justify-between gap-5 items-center'>
        <div className='w-12 h-12'>
          <img src={profile} alt='man' className='rounded-full' />
        </div>
        <div>
          <p className='text-xl text-white'>{userInfo.name} 님 안녕하세요</p>
          <div className='grid-row gap-5'>
            <span
              className='text-lg text-white font-black cursor-pointer'
              onClick={goMypage}
            >
              MY왕 바로가기
            </span>
            <span className='p-2 text-lg text-white '>•</span>
            <button className='text-lg text-white font-black'
            onClick={logOut}>로그아웃</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoMypage;
