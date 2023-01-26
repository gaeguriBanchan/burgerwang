const TabButton = ({ children, value, selectedValue, changeEvent }) => {
  return (
    <li className="px-3 mb-2 font-JUA text-xl font-black">
      <button
        onClick={(e) => changeEvent(e.target.value)}
        value={value}
        className={
          "pb-1 " +
          (selectedValue === value ? "text-bgwred border-b-4  border-bgwred" : "text-black")
        }
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
