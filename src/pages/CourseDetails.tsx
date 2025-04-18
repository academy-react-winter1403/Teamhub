import TopCourse from "../components/landing/TopCourse";
import Rating from "../components/common/Rating";
import CourseInfos from "../components/courseDetails/ui/CourseInfos";
import CourseTabs from "../components/courseDetails/ui/CourseTabs";

const CourseDetails = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* static */}
      <div className="w-10/12 h-200 flex p-5 justify-between">
        <div className="w-2/3 h-full p-5 flex flex-col justify-between ">
          <div className="relative w-full h-7/11 rounded-4xl  bg-[url(./CourseImg.svg)] bg-no-repeat bg-cover bg-center">
            {/* api should changes */}
            <span className="absolute w-20 h-12 rounded-4xl bg-white top-5 right-5"></span>
            <span className="absolute w-30 h-12 rounded-4xl bg-white bottom-5 left-10"></span>
            <span className="absolute w-30 h-12 rounded-4xl bg-white bottom-5 left-45"></span>
          </div>
          {/* title */}
          <div className="w-full h-2/11 flex flex-col justify-between">
            <h2 className="text-4xl text-justify">
              دوره جامع .net core صفر تا صد
            </h2>
            <p className="text-base text-justify">
              محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته
              و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
              جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
              کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله
              به روش کدنویسی پیشرفته و تمیز.
            </p>
          </div>
          {/* rate */}
          <div className="w-full h-1/11 items-center">
            <Rating />
          </div>
        </div>
        <div className="w-3/10 h-6/8 flex flex-col justify-between p-2 pt-5">
          <div className="w-full h-6/8 rounded-4xl bg-white items-center pr-7 pl-7">
            <h6 className="font-bold text-2xl h-1/8 items-center justify-center flex">
              مشخصات دوره
            </h6>
            <CourseInfos />
          </div>
          <div className="w-full h-1/6  rounded-4xl bg-white flex justify-start items-center">
            <div className="w-16 h-16">
              <img
                src="./person.png"
                alt=""
                className="w-full h-full rounded-4xl"
              />
            </div>
            <div className="text-justify">
              <h4 className="">دکتر بحرالعلوم</h4>
              <h6 className="text-xs">برنامه نویسی تحت فرانت و بکند</h6>
            </div>
          </div>
        </div>
      </div>
      {/* dynamic */}
      <div className="w-10/12 h-auto">
        <CourseTabs />
      </div>

      <TopCourse />
    </div>
  );
};

export default CourseDetails;
