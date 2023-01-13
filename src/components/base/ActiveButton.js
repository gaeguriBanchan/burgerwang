const ActiveButton = ({ name }) => {
  return (
    <button className="w-48 h-16 ml-1 bg-bgwred text-white text-2xl font-black rounded-xl">
      {name}
    </button>
  );
};

export default ActiveButton;
