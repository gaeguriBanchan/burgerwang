// /** @format */

import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import man from '../../assets/ninggen.jpg';
import { useSelector, useDispatch } from 'react-redux';
// 김재진 : 타이틀 출력
import { setTitle } from '../../reducer/headerSlice';
import GoMypage from './GoMypage';
const Header = () => {
  const titleInfo = useSelector((state) => {
    return state.headerTitle;
  });
  // 김재진 : 타이틀 출력
  const navigate = useNavigate();
  const disptach = useDispatch();
  const goMypage = () => {
    navigate('/mypage');
    disptach(setTitle({ title: '마이페이지' }));
  };
  const userInfo = useSelector((state) => {
    return state.user;
  });
  return (
    <div className='w-full grid grid-row-2'>
      <div className='w-full p-7 bg-red-500 h-40 flex justify-between'>
        <div className='container max-w-6xl px-5 m-auto flex justify-between'>
          <div className='flex gap-5'>
            <Link to='/home'>
              <img src={logo} alt='logo' className='self-center max-h-24' />
            </Link>
            <span className='self-center text-6xl text-white '>
              <Link to='/home'>버거왕</Link>
            </span>
          </div>
          {/* <span className='self-center p-2 px-10 rounded-full text-white bg-orange-900 text-2xl'>
          Home
        </span> */}
          {/* {userInfo.emil !== '' ? <GoMypage/>: ''} */}
          <GoMypage />
        </div>
      </div>
      <nav className='bg-black h-10 flex justify-between'>
        <div className='container max-w-6xl px-5 m-auto flex justify-between'>
          <div className=' grid grid-cols-4 gap-5 self-center'>
            {/* 타이틀 reduce 출력 : 김재진 */}
            <p className='text-white'>{titleInfo.title}</p>
          </div>
          <div className='grid grid-cols-3 gap-10 self-center'>
            <p className='text-white'>배달주소</p>
            <p className='text-white'>배달매장</p>
            <p className='text-white'>금액</p>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
