import AddToCart from "../../common/buttons/AddToCart";

const CourseInfos: any = ({capacity, status, endTime, insertDate, cost}: any) => {
  return (
    <div className="h-6/8 flex flex-col justify-evenly">
      <div className="flex justify-between">
        <span className="">تعداد دانشجو</span>
        <span className="">{capacity}</span>
      </div>
      <div className="flex justify-between">
        <span className="">وضعیت دوره</span>
        <span className="">{status}</span>
      </div>
      <div className="flex justify-between">
        <span className="">تاریخ شروع</span>
        <span className="">{insertDate}</span>
      </div>
      <div className="flex justify-between">
        <span className="">تاریخ پایان</span>
        <span className="">{endTime}</span>
      </div>
      <div className="flex justify-between">
        <AddToCart />
        <span className="text-blue-500 text-xl">{cost + " تومان"}</span>
      </div>
    </div>
  );
};

export default CourseInfos;
