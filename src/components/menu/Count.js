import React from 'react';

const Count = (props) => {
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header className='text-3xl'>
            메뉴 수량 선택
            <button className='close' onClick={close}>
              &times;
            </button>
          </header>
          <main style={{ backgroundColor: '#f2ebe6' }} className='#f2ebe6'>
            <div className='mb-3 grid grid-rows-4'>
              <div className='text-2xl m-auto self-center'>메뉴 이름</div>
              <span className='text-lg m-auto self-center'>개</span>
              <span className='text-sm m-auto self-center'>를 카트에 담으시겠습니까?</span>
              <div>
                <button></button>
                <button></button>
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

export default Count;
