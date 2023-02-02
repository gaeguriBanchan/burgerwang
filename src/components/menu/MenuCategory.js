import TabButton from "../base/TabButton";
const MenuCategory = ({ selectedCategory, changeSelectedCategory }) => {
  return (
    <ul className="flex">
      <TabButton value="1" selectedValue={selectedCategory} changeEvent={changeSelectedCategory}>
        스페셜&할인팩
      </TabButton>
      <TabButton value="2" selectedValue={selectedCategory} changeEvent={changeSelectedCategory}>
        신제품(NEW)
      </TabButton>
      <TabButton value="3" selectedValue={selectedCategory} changeEvent={changeSelectedCategory}>
        프리미엄
      </TabButton>
      <TabButton value="4" selectedValue={selectedCategory} changeEvent={changeSelectedCategory}>
        와퍼&주니어
      </TabButton>
      <TabButton value="5" selectedValue={selectedCategory} changeEvent={changeSelectedCategory}>
        치킨&슈림프버거
      </TabButton>
      <TabButton value="6" selectedValue={selectedCategory} changeEvent={changeSelectedCategory}>
        사이드
      </TabButton>
      <TabButton value="7" selectedValue={selectedCategory} changeEvent={changeSelectedCategory}>
        음료&디저트
      </TabButton>
      <TabButton value="8" selectedValue={selectedCategory} changeEvent={changeSelectedCategory}>
        독퍼
      </TabButton>
    </ul>
  );
};

export default MenuCategory;
