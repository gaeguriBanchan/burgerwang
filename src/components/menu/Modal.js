import React, { useState } from 'react';
import Ingredients from './Ingredients';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [ingredientOpen, setIngredientOpen] = useState(false);

  const openIngredient = () => {
    setIngredientOpen(true);
  };
  const closeIngredient = () => {
    setIngredientOpen(false);
  };
  // const bg = {background: '#f2ebe6'}
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
          <div className='w-full h-20 bg-black grid grid-rows-2'>
            <span className='text-white self-center ml-4 text-3xl'>
              메뉴 이름
            </span>
            <span className='text-white self-center ml-4'>메뉴 설명</span>
          </div>
          <main style={{ backgroundColor: '#f2ebe6' }} className='#f2ebe6'>
            <button onClick={openIngredient} className='h-28 mb-3 bg-white grid grid-cols-10 gap-1'>
              <div className='bg-slate-400 h-24 col-span-6 self-center grid grid-rows-3'>
                <span className='text-3xl ml-5'>와퍼</span>
                <span className='text-1xl ml-5 self-center'>설명</span>
                <span className='text-2xl ml-5 text-red-700'>가격</span>
              </div>
              <div className='bg-slate-400 h-24 col-span-4 self-center grid justify-items-center'>
                <img
                  className='h-24'
                  src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/20d51953-6bca-47a1-a9cf-7ff9f299380c.png'
                  alt='이미지'
                />
              </div>
            </button>
            <div className='h-28 mb-3 bg-white grid grid-cols-10 gap-1'>
              <div className='bg-slate-400 h-24 col-span-6 self-center grid grid-rows-3'>
                <span className='text-3xl ml-5'>와퍼</span>
                <span className='text-1xl ml-5 self-center'>설명</span>
                <span className='text-2xl ml-5 text-red-700'>가격</span>
              </div>
              <div className='bg-slate-400 h-24 col-span-4 self-center grid justify-items-center'>
                <img
                  className='h-24'
                  src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/20d51953-6bca-47a1-a9cf-7ff9f299380c.png'
                  alt='이미지'
                />
              </div>
            </div>
            <div className='h-28 mb-3 bg-white grid grid-cols-10 gap-1'>
              <div className='bg-slate-400 h-24 col-span-6 self-center grid grid-rows-3'>
                <span className='text-3xl ml-5'>와퍼</span>
                <span className='text-1xl ml-5 self-center'>설명</span>
                <span className='text-2xl ml-5 text-red-700'>가격</span>
              </div>
              <div className='bg-slate-400 h-24 col-span-4 self-center grid justify-items-center'>
                <img
                  className='h-24'
                  src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/20d51953-6bca-47a1-a9cf-7ff9f299380c.png'
                  alt='이미지'
                />
              </div>
            </div>
          </main>
          {/* <footer>
            <button className='close' onClick={close}>
              close
            </button>
          </footer> */}
        </section>
      ) : null}
      <Ingredients
        open={ingredientOpen}
        close={closeIngredient}
      ></Ingredients>
    </div>
  );
};

export default Modal;
