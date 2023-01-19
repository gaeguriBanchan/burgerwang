import React from 'react'

const Drink = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header className='text-3xl'>
            음료 변경
            <button className='close' onClick={close}>
              &times;
            </button>
          </header>
          <main style={{ backgroundColor: '#f2ebe6' }} className='#f2ebe6'>
            <div className='mb-3 grid grid-cols-3 gap-2'>
              <div className='grid grid-rows'>
                <img
                  className='m-auto'
                  src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/20d51953-6bca-47a1-a9cf-7ff9f299380c.png'
                  alt='이미지'
                />
                <span className='text-lg m-auto self-center'>사이드</span>
                <span className='text-sm m-auto self-center'>
                  가격
                </span>
              </div>
              <div className='grid grid-rows'>
                <img
                  className='m-auto'
                  src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/20d51953-6bca-47a1-a9cf-7ff9f299380c.png'
                  alt='이미지'
                />
                <span className='text-lg m-auto self-center'>사이드</span>
                <span className='text-sm m-auto self-center'>
                  가격
                </span>
              </div>
              
            </div>
          </main>
          <footer className='flex justify-center bg-red-600'>
            <button className=''>확인</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Drink