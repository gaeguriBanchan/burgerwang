/** @format */
import { Helmet } from 'react-helmet-async';
import JoinProfile from '../components/join/JoinProfile';
import JoinOptional from '../components/join/JoinOptional';
import JoinPw from '../components/join/JoinPw';
import { useForm } from 'react-hook-form';
import PageName from '../components/base/PageName';

const Join = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Helmet>
        <title>회원가입</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container max-w-6xl px-5 py-12">
          <PageName pagename={'회원가입'} />
          <JoinProfile register={register} />
          <JoinOptional register={register} />
          <JoinPw register={register} />
        </div>
        <center>
          <button
            className="w-48 h-16 ml-1 bg-[#C0AFA6] text-white text-2xl font-black rounded-xl"
            type="submit"
          >
            회원가입
          </button>
        </center>
      </form>
    </div>
  );
};

export default Join;
