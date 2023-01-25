const ActiveButton = ({ children, event }) => {
  return (
    <button
      className="w-48 h-16 ml-1 bg-bgwred text-white text-2xl font-black rounded-xl"
      onClick={() => event && event()}
    >
      {children}
    </button>
  );
};

export default ActiveButton;
