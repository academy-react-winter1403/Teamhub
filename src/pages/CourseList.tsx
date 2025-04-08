import { CardViewTwo } from "../components/cards/courseCards/CardViewTwo";
import { CardWrapper } from "../components/cards/courseCards/wrapper/CardWrapper";
import { Pagination } from "../components/common/Pagination";
import Search from "../components/common/Search";
import { Filters } from "../components/courseList/filter/Filters";

const CourseList = () => {
  return (
    <div className="bg-[#FAFBFC] relative w-full flex flex-col justify-center items-center">
      <div className="banner h-130 w-[90%] bg-[url(/courseListBanner.png)] bg-no-repeat bg-center bg-contain"></div>
      <div className="w-[90%] flex justify-center gap-5">
        <Filters />

        <div className="courses rounded-xl w-[70%]">
          <div className="tabs tabs-box flex bg-[#FAFBFC] mb-5">
            <input type="radio" name="my_tabs_6" className="tab bg-[url(/grid-1.svg)] bg-no-repeat bg-center m-1 mb-8" defaultChecked/>
            <div className="tab-content bg-[#FAFBFC]">
                <CardWrapper/>
            </div>

            <input type="radio" name="my_tabs_6" className="tab bg-[url(/grid-2.svg)] bg-no-repeat bg-center m-1"/>
            <div className="tab-content bg-[#FAFBFC] border-base-300">
              <CardViewTwo />
              <CardViewTwo />
              <CardViewTwo />
              <CardViewTwo />
            </div>

            <div className="flex w-[90%]">
              <Search/>
              <button className="btn w-[25%] h-11 bg-white  rounded-xl shadow-md font-light">
                <img src="./sort.svg" alt="" />
                محبوب ترین ها
                <img src="./arrow-down.svg" className="mr-5" alt="" />
              </button>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export { CourseList };