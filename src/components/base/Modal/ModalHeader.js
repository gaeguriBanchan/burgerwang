const ModalHeader = ({ title, closeModal }) => {
  return (
    <div className="flex justify-between items-center bg-white border-b-2 border-ededed">
      <p className="px-10 py-5 font-JUA text-3xl">{title}</p>
      <button
        onClick={() => closeModal()}
        className="bg-icon-close bg-no-repeat bg-center w-24 h-24"
      ></button>
    </div>
  );
};

export default ModalHeader;
