const ChangeButton = ({ name, event, params }) => {
  return (
    <button
      className="bg-2e2e2e text-xl text-white rounded h-10 px-3"
      onClick={() => event(params)}
    >
      {name}
    </button>
  );
};

export default ChangeButton;
