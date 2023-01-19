import React from 'react';

const Ingredients = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header className='text-3xl'>
            메뉴선택
            <button className='close' onClick={close}>
              &times;
            </button>
          </header>
          <div className='w-full h-16 bg-white flex justify-center'>
            <span className='text-black self-center ml-4 text-2xl'>
              기본 재료로 변경
            </span>
          </div>
          <main style={{ backgroundColor: '#f2ebe6' }} className='#f2ebe6'>
            <div className='h-16 mb-3 grid grid-cols-10 gap-1'>
              <input className='h-6 col-span-1 self-center' type='checkbox'/>
              <div className='h-16 col-span-6 self-center grid grid-rows-2'>
                <span className='text-lg ml-5 self-center'>재료</span>
                <span className='text-sm ml-5 self-center text-slate-400'>가격</span>
              </div>
              <div className='h-16 col-span-3 self-center grid justify-items-center'>
                <img
                  className='h-16'
                  src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/20d51953-6bca-47a1-a9cf-7ff9f299380c.png'
                  alt='이미지'
                />
              </div>
            </div>
            
          </main>
          <footer className='flex justify-center bg-red-600'>
            <button className=''>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Ingredients;
