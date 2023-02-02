const ActiveButton = ({ children, disabled, event }) => {
  return (
    <button
      className="w-48 h-16 ml-1 bg-bgwred text-white text-2xl font-black rounded-xl"
      onClick={() => event && event()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ActiveButton;
