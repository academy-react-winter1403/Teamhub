import { BlogsTitles } from "../components/blogs&news/ui/BlogsTitles";
import { BlogCardWrapper } from "../components/cards/blogs/wrapper/Index";
import { BlogSorting } from "../components/blogs&news/ui/BlogSorting";
import { useBlogsdata } from "../components/blogs&news/func/Index";
import { Search } from "../components/courseList/search/Search";
import { Pagination } from "../components/common/Pagination";

const Blogs = () => {
  const {allCourses, cardList, setCardList, currentPage, totalPages, handlePageChange} = useBlogsdata()

  return (
    <div className="w-full bg-[#FAFBFC] mt-5 mb-15">
      <BlogsTitles/>

      <div className="w-[90%] mx-auto ">
        <div className="w-full h-[60px] flex justify-between ">
          <Search 
            setCardList={setCardList as any} 
            originalData={allCourses} 
          />  
          
          <BlogSorting/>
        </div>
        <BlogCardWrapper
          blogState={{news: cardList}} 
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export { Blogs };