const TopCard = () => {
  return (
    <div className="w-9/10 h-100 flex justify-between ">
      <div className="h-9/10 w-74 rounded-4xl flex flex-col justify-evenly items-center bg-white">
        <img src="" alt="" className="w-66 h-45 rounded-4xl bg-red-400" />
        <h3 className="h-6 pr-2 text-base font-bold text-right self-start">
          Title
        </h3>
        <div className="w-9/10 h-10 flex justify-between bg-[#ECEFF1] rounded-4xl items-center">
          <span className="w-2/10 indent-3 bg-[url(./note-2.svg)] bg-no-repeat bg-right">
            lesson
          </span>
          <span className=" w-2/10 indent-3 bg-[url(./clock.svg)] bg-no-repeat bg-right">
            hour
          </span>
          <span className="w-2/10 indent-3 bg-[url(./calendar.svg)] bg-no-repeat bg-right ">
            date
          </span>
        </div>
        <div className="w-9/10 flex justify-between ">
          <h6>teacher</h6>
          <span>student</span>
        </div>
        <div className="w-9/10 flex justify-between">
          <span>price</span>
          <span>favorite</span>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
