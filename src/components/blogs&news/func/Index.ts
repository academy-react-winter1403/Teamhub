import { useEffect, useState } from "react";
import { getBlogCards } from "../../../core/services/api/Blog";
import { INews } from "../../../core/services/types/news.type";

export const useBlogsdata = () => {
  const [cardList, setCardList] = useState<INews[]>([]);
  const [allCourses, setAllCourses] = useState<INews[]>([]); // تمام دوره‌ها از همه صفحات
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBlogsData = async () => {
    try {
      // دریافت صفحه اول
      const firstPage = await getBlogCards(1);
      const firstPageData = Object.values(firstPage)[0] as INews[];
      const totalCount = firstPage.totalCount;

      setAllCourses(firstPageData);
      setCardList(firstPageData);
      setTotalPages(Math.ceil(totalCount / 12));


            if (totalCount > firstPageData.length) {
                const totalPages = Math.ceil(totalCount / 12);
                const requests = [];
                
                for (let page = 2; page <= totalPages; page++) {
                  requests.push(getBlogCards(page));
                }
                
                const responses = await Promise.all(requests);
                const allData = firstPageData.concat(
                  ...responses.map(res => Object.values(res)[0] as INews[])
                );
                    
                setAllCourses(allData);
                // console.log(allData)
            }
          
        } catch (error) {
            console.error("Error fetching all courses:", error);
          }
  }
  // دریافت داده‌های صفحه جاری
  const getPageData = async (page: number) => {
    if (page === 1) return; // صفحه اول قبلا دریافت شده

    try {
      const response = await getBlogCards(page);
      const dataArray = Object.values(response);
      setCardList(dataArray[0] as INews[]);
    } catch (error) {
      console.error("Error fetching page data:", error);
    }
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  useEffect(() => {
    getPageData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return {
    allCourses,
    cardList,
    setCardList,
    currentPage,
    totalPages,
    handlePageChange,
  };
};
