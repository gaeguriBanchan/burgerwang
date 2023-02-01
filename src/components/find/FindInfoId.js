/** @format */

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ActiveBlackButton from '../base/ActiveBlackButton';
import PageName from '../base/PageName';
import FindId from './FindId';
import useInput from '../join/hook/useInput';
const FindInfoId = () => {
  const [joinName, userName] = useInput('');
  const [joinPhon, userPhon] = useInput('');

  console.log(joinName, joinPhon);

  return (
    <div className="container max-w-6xl px-5 py-12">
      <Helmet>
        <title>아이디 찾기</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <div className="container w-10/12">
        <PageName pagename={'아이디 / 비밀번호 찾기'} />
        <ul className="flex">
          <li className="pr-3 mb-4 font-JUA text-2xl">
            <Link
              to="/findinfoId"
              className={'pb-1 text-bgwred border-b-4  border-bgwred'}
            >
              아이디 찾기
            </Link>
          </li>
          <li className="pr-3 mb-4 font-JUA text-2xl">
            <Link to="/findinfoPw" className={'text-black'}>
              비밀번호 찾기
            </Link>
          </li>
        </ul>
        <FindId
          joinName={joinName}
          userName={userName}
          joinPhon={joinPhon}
          userPhon={userPhon}
        />
      </div>
      <div className="flex justify-center pt-5">
        <ActiveBlackButton name={'아이디 찾기'} />
      </div>
    </div>
  );
};

export default FindInfoId;
