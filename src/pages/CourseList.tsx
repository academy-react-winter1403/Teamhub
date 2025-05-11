import { WrapperViewOne } from "../components/cards/courseCards/wrapper/WrapperViewOne";
import { WrapperViewTwo } from "../components/cards/courseCards/wrapper/WrapperViewTwo";
import { Pagination } from "../components/common/Pagination";
import { Search } from "../components/courseList/search/Search";
import { Filters } from "../components/courseList/filter/Filters";
import CourseListTitles from "../components/courseList/CourseListTitles";
import { PopularCoursesBtn } from "../components/courseList/PopularCoursesBtn";
import { UseCourseData } from "../components/courseList/func/CourseData";

const CourseList = () => {
  const {
    allCourses,
    setFilteredCourses,
    cardList,
    setCardList,
    currentPage,
    totalPages,
    handlePageChange,
  } = UseCourseData();

  return (
    <div className="bg-[#FAFBFC] relative w-full flex flex-col justify-center items-center">
      {/* page banner */}
      <CourseListTitles />
      <div className="w-[90%] flex justify-center gap-5">
        <Filters
          allCourses={allCourses}
          onFilterChange={setFilteredCourses}
          setCardList={setCardList}
        />

        <div className="courses rounded-xl w-[70%]">
          <div className="tabs tabs-box flex justify-between bg-[#FAFBFC] mb-5">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab w-10 rounded-full bg-[url(/grid-1.svg)] bg-no-repeat bg-center m-1 mb-8"
              defaultChecked
            />
            <div className="tab-content bg-[#FAFBFC]">
              <WrapperViewOne cardList={cardList} />
            </div>
            <input
              type="radio"
              name="my_tabs_6"
              className="tab w-10 rounded-full bg-[url(/grid-2.svg)] bg-no-repeat bg-center m-1 "
            />
            <div className="tab-content bg-[#FAFBFC] border-base-300">
              <WrapperViewTwo cardList={cardList} />
            </div>

            <div className="flex w-[90%]">
              <Search setCardList={setCardList} originalData={allCourses} />
              <PopularCoursesBtn
                setCardList={setCardList}
                allCourses={allCourses}
              />
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export { CourseList };
