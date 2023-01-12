import React, { Fragment } from 'react';

const Menu = () => {
  return (
    <Fragment className=''>
      <div className='container max-w-6xl px-5 m-auto '>
        <div className='flex justify-between mb-14 mt-7'>
          <span className='text-4xl font-black'>메뉴</span>
          <ul className='flex justify-between basis-3/4 items-end '>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              스페셜&할인팩
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              신제품(new)
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              프리미엄
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              와퍼&주니어
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              치킨&슈림프버거
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              사이드
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              음료&디저트
            </li>
            <li className='text-neutral-400 hover:text-neutral-900 font-extrabold'>
              독퍼
            </li>
          </ul>
        </div>
        <div className='grid grid-cols-4 gap-x-9 gap-y-24'>
          <div className='grid grid-rows-none'>
            <img
              className='flex justify-center'
              src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/d33eb7d4-f31f-48a8-a921-5cbb9136f5f6.png'
              alt=''
            />
            <img
              className='absolute'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAjCAYAAAA9guKMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTMzNDI2ODM0NkYzMTFFOUFBNjFBMDU0MkUxQkI0NEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTMzNDI2ODQ0NkYzMTFFOUFBNjFBMDU0MkUxQkI0NEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MzM0MjY4MTQ2RjMxMUU5QUE2MUEwNTQyRTFCQjQ0QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MzM0MjY4MjQ2RjMxMUU5QUE2MUEwNTQyRTFCQjQ0QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph+Xt7oAAAj3SURBVHjaxFl7cFTV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'
              alt=''
            />
            <div className='flex justify-center'>블랙어니언팩</div>
            <div className='flex justify-center'>￦23700</div>
          </div>
          <div className='grid grid-rows-none'>
            <img
              className='flex justify-center'
              src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/d33eb7d4-f31f-48a8-a921-5cbb9136f5f6.png'
            />
            <img
              className='absolute'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAjCAYAAAA9guKMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTMzNDI2ODM0NkYzMTFFOUFBNjFBMDU0MkUxQkI0NEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTMzNDI2ODQ0NkYzMTFFOUFBNjFBMDU0MkUxQkI0NEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MzM0MjY4MTQ2RjMxMUU5QUE2MUEwNTQyRTFCQjQ0QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MzM0MjY4MjQ2RjMxMUU5QUE2MUEwNTQyRTFCQjQ0QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph+Xt7oAAAj3SURBVHjaxFl7cFTV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'
            />
            <div className='flex justify-center'>블랙어니언팩</div>
            <div className='flex justify-center'>￦23700</div>
          </div>
          <div className='grid grid-rows-none'>
            <img
              className='flex justify-center'
              src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/d33eb7d4-f31f-48a8-a921-5cbb9136f5f6.png'
            />
            <div className='flex justify-center'>블랙어니언팩</div>
            <div className='flex justify-center'>￦23700</div>
          </div>
          <div className='grid grid-rows-none'>
            <img
              className='flex justify-center'
              src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/d33eb7d4-f31f-48a8-a921-5cbb9136f5f6.png'
            />
            <div className='flex justify-center'>블랙어니언팩</div>
            <div className='flex justify-center'>￦23700</div>
          </div>
          <div className='grid grid-rows-none'>
            <img
              className='flex justify-center'
              src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/d33eb7d4-f31f-48a8-a921-5cbb9136f5f6.png'
            />
            <div className='flex justify-center'>블랙어니언팩</div>
            <div className='flex justify-center'>￦23700</div>
          </div>
          <div className='grid grid-rows-none'>
            <img
              className='flex justify-center'
              src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/d33eb7d4-f31f-48a8-a921-5cbb9136f5f6.png'
            />
            <div className='flex justify-center'>블랙어니언팩</div>
            <div className='flex justify-center'>￦23700</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
