import TopCard from "../cards/landing/ui/TopCourse";
import SeeAllBtn from "../common/buttons/SeeAllBtn";

const TopCourse = () => {
  return (
    <div className="w-9/10 h-147 items-center flex flex-col justify-around mb-20">
      <div className="flex flex-col justify-around">
        <h4 className="font-black text-4xl ">دوره های آموزشی</h4>
        <span className="w-full h-1 bg-[#2196F3] bg-linear-to-l from-white to-[#2196F3] "></span>
      </div>
      <TopCard />
      <SeeAllBtn />
    </div>
  );
};

export default TopCourse;
