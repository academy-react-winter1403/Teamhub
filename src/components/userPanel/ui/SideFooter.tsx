const SideFooter = () => {
  return (
    <div className="w-full h-1/8 flex items-center justify-evenly">
      <div className="w-8/10 h-2/3 flex items-center justify-between">
        <div className="logo flex  font-semibold items-center">
          <img className="ml-2 w-10" src="./logo.svg" alt="" />
          هگزا اسکواد
        </div>
        <button className="btn btn-error"></button>
      </div>
    </div>
  );
};

export default SideFooter;
