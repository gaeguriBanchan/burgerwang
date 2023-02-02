// /** @format */

import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import man from '../../assets/ninggen.jpg';
import { useSelector, useDispatch } from 'react-redux';
// 김재진 : 타이틀 출력
import GoMypage from './GoMypage';
const Header = () => {
  
  // 김재진 : 타이틀 출력
  // const navigate = useNavigate();
  // const disptach = useDispatch();
  // const goMypage = () => {
  //   navigate('/mypage');
  //   disptach(setTitle({ title: '마이페이지' }));
  // };
  // const userInfo = useSelector((state) => {
  //   return state.user;
  // });
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
          {/* {userInfo.emil !== '' ? <GoMypage/>: ''} */}
          <GoMypage />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
