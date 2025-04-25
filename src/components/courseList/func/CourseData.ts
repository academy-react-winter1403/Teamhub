import { useEffect, useState } from "react";
import { CourseState } from "../../../core/constants/Types";
import { getCourseList } from "../../../core/services/api/CourseList";

export const UseCourseData= () => {

  const [cardList, setCardList] = useState<CourseState[]>([]);
  const [allCourses, setAllCourses] = useState<CourseState[]>([]); // تمام دوره‌ها از همه صفحات
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredCourses, setFilteredCourses] = useState<CourseState[]>([])

  useEffect(() => {
    if (allCourses.length > 0) {
      setFilteredCourses(allCourses);
    }
  }, [allCourses]);

  // 3. جایگزینی cardList با filteredCourses
  useEffect(() => {
    if (filteredCourses.length > 0) {
      const startIndex = (currentPage - 1) * 12;
      const endIndex = startIndex + 12;
      setCardList(filteredCourses.slice(startIndex, endIndex));
      setTotalPages(Math.ceil(filteredCourses.length / 12));
    }
  }, [filteredCourses, currentPage]);

  // دریافت تمام دوره‌ها از همه صفحات
  const fetchAllCourses = async () => {
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
    }
  };

  // دریافت داده‌های صفحه جاری
  const getPageData = async (page: number) => {
    if (page === 1) return; // صفحه اول قبلا دریافت شده

    try {
      const response = await getCourseList(page);
      const dataArray = Object.values(response);
      setCardList(dataArray[0] as CourseState[]);
    } catch (error) {
      console.error("Error fetching page data:", error);
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

  return {allCourses, setFilteredCourses, cardList, setCardList, currentPage, totalPages, handlePageChange}
}