const ChangeButton = ({ name, event }) => {
  return (
    <button className="bg-2e2e2e text-xl text-white rounded h-10 px-3" onClick={() => event()}>
      {name}
    </button>
  );
};

export default ChangeButton;
