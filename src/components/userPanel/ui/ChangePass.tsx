import PassInput from "./PassInput";

const ChangePass = () => {
  return (
    <div className="w-full h-full flex justify-evenly items-center">
      <div className="w-3/4 h-3/4 flex flex-col items-center justify-evenly">
        <div className="">
          <PassInput />
          <PassInput />
          <PassInput />
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Responsive
        </button>
      </div>
    </div>
  );
};

export default ChangePass;
