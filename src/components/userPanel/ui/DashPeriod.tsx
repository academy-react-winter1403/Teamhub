const DashPeriod = () => {
  return (
    <>
      <div className="h-full w-1/2 p-2.5 flex flex-col justify-between gap-y-5">
        <div className="divider divider-start ">دوره های درحال برگزاری :</div>
        <div className="w-full flex justify-between rounded-lg p-3 shadow-lg bg-gray-200 ">
          <div className="flex flex-col justify-between items-start">
            <h3 className="">موضوع</h3>
            <a href="">مشاهده دوره</a>
          </div>
          <img alt="" className="rounded-lg bg-amber-500 w-30 h-15" />
        </div>
        <div className="w-full flex justify-between rounded-lg p-3 shadow-lg bg-gray-200 ">
          <div className="flex flex-col justify-between items-start">
            <h3 className="">موضوع</h3>
            <a href="">مشاهده دوره</a>
          </div>
          <img alt="" className="rounded-lg bg-amber-500 w-30 h-15" />
        </div>
      </div>
      <div className="h-full w-1/2 p-2.5 flex flex-col justify-between gap-y-5">
        <div className="divider divider-start ">دوره های پیشنهادی :</div>
        <div className="w-full flex justify-between rounded-lg p-3 shadow-lg bg-gray-200 ">
          <div className="flex flex-col justify-between items-start">
            <h3 className="">موضوع</h3>
            <a href="">مشاهده دوره</a>
          </div>
          <img alt="" className="rounded-lg bg-amber-500 w-30 h-15" />
        </div>
        <div className="w-full flex justify-between rounded-lg p-3 shadow-lg bg-gray-200 ">
          <div className="flex flex-col justify-between items-start">
            <h3 className="">موضوع</h3>
            <a href="">مشاهده دوره</a>
          </div>
          <img alt="" className="rounded-lg bg-amber-500 w-30 h-15" />
        </div>
      </div>
    </>
  );
};

export default DashPeriod;
