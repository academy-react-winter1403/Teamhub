import { useEffect, useState } from "react";
import { WrapperViewOne } from "../components/cards/courseCards/wrapper/WrapperViewOne";
import { WrapperViewTwo } from "../components/cards/courseCards/wrapper/WrapperViewTwo";
import { Pagination } from "../components/common/Pagination";
import { Search } from "../components/courseList/search/Search";
import { Filters } from "../components/courseList/filter/Filters";
import { getCourseList } from "../core/services/api/CourseList";
import CourseListTitles from "../components/courseList/CourseListTitles";
import { CourseState } from "../core/constants/Types";
import { PopularCoursesBtn } from "../components/courseList/PopularCoursesBtn";

// const CourseList = () => {
//   const [cardList, setCardList] = useState<CourseState[]>([]);
//   const [originalData, setoriginalData] = useState<CourseState[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const getCourseData = async () => {
//     const response = await getCourseList(currentPage);
//     const dataArray = Object.values(response);
//     const courses = dataArray[0] as CourseState[]
//     setCardList(courses);
//     setoriginalData(courses);
//     setTotalPages(Math.ceil( response.totalCount / 12))
//     console.log(courses);
//   };
//   useEffect(() => {
//     getCourseData();
//   }, [currentPage]);

//   const handlePageChange = (newPage: number) => {
//     if(newPage >= 1 && newPage <= totalPages){
//       setCurrentPage(newPage)
//     }
//   }
const CourseList = () => {
  const [cardList, setCardList] = useState<CourseState[]>([]);
  const [allCourses, setAllCourses] = useState<CourseState[]>([]); // تمام دوره‌ها از همه صفحات
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // دریافت تمام دوره‌ها از همه صفحات
  const fetchAllCourses = async () => {
    setIsLoading(true);
    try {
      // دریافت صفحه اول
      const firstPage = await getCourseList(1);
      const firstPageData = Object.values(firstPage)[0] as CourseState[];
      const totalCount = firstPage.totalCount;
      
      setAllCourses(firstPageData);
      setCardList(firstPageData);
      setTotalPages(Math.ceil(totalCount / 12));

      // اگر داده‌های بیشتری وجود دارد، بقیه صفحات را دریافت کن
      if (totalCount > firstPageData.length) {
        const totalPages = Math.ceil(totalCount / 12);
        const requests = [];
        
        for (let page = 2; page <= totalPages; page++) {
          requests.push(getCourseList(page));
        }
        
        const responses = await Promise.all(requests);
        const allData = firstPageData.concat(
          ...responses.map(res => Object.values(res)[0] as CourseState[])
        );
        
        setAllCourses(allData);
      }
    } catch (error) {
      console.error("Error fetching all courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // دریافت داده‌های صفحه جاری
  const getPageData = async (page: number) => {
    if (page === 1) return; // صفحه اول قبلا دریافت شده
    setIsLoading(true);
    try {
      const response = await getCourseList(page);
      const dataArray = Object.values(response);
      setCardList(dataArray[0] as CourseState[]);
    } catch (error) {
      console.error("Error fetching page data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  useEffect(() => {
    getPageData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if(newPage >= 1 && newPage <= totalPages){
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-[#FAFBFC] relative w-full flex flex-col justify-center items-center">
      <CourseListTitles />

      <div className="w-[90%] flex justify-center gap-5">
        <Filters />

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
              <Search 
              setCardList={setCardList} 
              originalData={allCourses} 
              />
              <PopularCoursesBtn />
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