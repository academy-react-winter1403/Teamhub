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
      <div className="h-30"></div>
      {/* page banner */}
      <CourseListTitles />
      <div className="w-[90%] flex justify-center gap-5">
        <div className="hidden lg:block">
          <Filters
            allCourses={allCourses}
            onFilterChange={setFilteredCourses}
            setCardList={setCardList}
          />
        </div>
        <div className="lg:hidden">
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1 w-13 h-12 bg-[url(/cardIcons/filter.svg)] bg-[50%] bg-[size:30px] bg-no-repeat border-none rounded-2xl"></div>
            <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <Filters
                allCourses={allCourses}
                onFilterChange={setFilteredCourses}
                setCardList={setCardList}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center courses rounded-xl w-[70%]">
          <div className="tabs tabs-border flex bg-[#FAFBFC] mb-5">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab w-10 rounded-full bg-[url(/grid-1.svg)] bg-no-repeat bg-[size:30px] bg-center m-1 mb-8"
              defaultChecked
            />
            <div className="tab-content bg-[#FAFBFC]">
              <WrapperViewOne cardList={cardList} />
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              className="tab w-10 rounded-full bg-[url(/grid-2.svg)] bg-no-repeat bg-[size:30px] bg-center m-1 "
            />
            <div className="tab-content bg-[#FAFBFC] border-base-300">
              <WrapperViewTwo cardList={cardList} />
            </div>

            <div className="flex justify-between w-[90%] md:w-[80%]">
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
