import AddToCart from "../../common/AddToCart";

const CourseInfos = () => {
  return (
    <div className="h-6/8 flex flex-col justify-evenly">
      <div className="flex justify-between">
        <span className="">تعداد دانشجو</span>
        <span className="">27</span>
      </div>
      <div className="flex justify-between">
        <span className="">وضعیت دوره</span>
        <span className="">در حال برگزاری</span>
      </div>
      <div className="flex justify-between">
        <span className="">تاریخ شروع</span>
        <span className="">24 فروردین 1403</span>
      </div>
      <div className="flex justify-between">
        <span className="">تاریخ پایان</span>
        <span className="">24 شهریور 1403</span>
      </div>
      <div className="flex justify-between">
        <AddToCart />
        <span>500 تومان</span>
      </div>
    </div>
  );
};

export default CourseInfos;
