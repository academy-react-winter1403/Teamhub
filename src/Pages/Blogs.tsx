import mainImg from "../assets/images/BlogMainImg.svg";
// import bgMain from "../assets/images/Rectangle24.svg";
// import mainDot1 from "../assets/images/dot1.svg";
// import mainDot2 from "../assets/images/dot2.svg";
// import mainDot3 from "../assets/images/dot3.svg";
// import mainEllipse from "../assets/images/Ellipse.svg";
import Search from "../components/common/Search";
import BlogCard from "../components/articles/BlogCard";
import { Pagination } from "../components/common/Pagination";

const Blogs = () => {
  return (
    <div className="w-full bg-[#FAFBFC] mt-5 mb-15">
      <div className="w-12/13 h-[450px] relative mb-19 ">
        <img className="absolute left-0 z-100 " src={mainImg} alt="not found" />
        <img className="absolute right-65 mt-80 " alt="not found" />
        <div className=" w-5/12 text-right relative top-43 right-17">
          <h1 className="font-black text-4xl mb-3 ">
            اخبار و مقالات هگزا اسکواد
          </h1>
          <p className="font-medium text-base  ">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.
          </p>
        </div>
      </div>
      {/* bg-red-400 */}
      <div className="w-11/12 mx-auto ">
        <div className="w-full h-[65px] flex justify-between ">
          <div className="w-7/12 flex justify-center items-center ">
            <Search />
          </div>
          <div className="w-5/12  flex justify-center items-center gap-5 bg-white rounded-2xl shadow tabs tabs-boxed">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded hover:bg-blue-400 hover:text-white  focus:bg-blue-400 focus:text-white "
              aria-label="همه"
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded hover:bg-blue-400 hover:text-white  focus:bg-blue-400 focus:text-white "
              aria-label="محبوب‌ترین‌ها"
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded hover:bg-blue-400 hover:text-white  focus:bg-blue-400 focus:text-white "
              aria-label="پربازدیدترین‌ها"
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded hover:bg-blue-400 hover:text-white  focus:bg-blue-400 focus:text-white "
              aria-label="جدیدترین‌ها"
            />
          </div>
        </div>

        <div className="flex  flex-row flex-wrap gap-8 py-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <Pagination />
      </div>
    </div>
  );
};
export { Blogs };
