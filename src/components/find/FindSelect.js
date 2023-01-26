import React from "react";

const FindSelect = ({ name, value, changeTab, faindTab }) => {
  return (
    <div>
      <li className="pr-3 mb-4 font-JUA text-2xl">
        <button
          onClick={(e) => changeTab(e.target.value)}
          value={value}
          className={
            "pb-1 " +
            (faindTab === value
              ? "text-bgwred border-b-4  border-bgwred"
              : "text-black")
          }
        >
          {name}
        </button>
      </li>
    </div>
  );
};

export default FindSelect;
