import TopCourse from "../components/landing/TopCourse";
import Rating from "../components/common/Rating";
import CourseInfos from "../components/courseDetails/ui/CourseInfos";
import CourseTabs from "../components/courseDetails/ui/CourseTabs";
import {useCourseDetails} from "../components/courseDetails/func/CourseData";
import courseImage from "../assets/images/CourseImg.svg"
// // import { CourseDetailsType } from "../core/services/types/CourseDetails";

const CourseDetails = () => {

  const {details, loading, error, teacher} = useCourseDetails()
  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center w-full">
      {/* static */}
      <div className="w-10/12 h-200 flex p-5 justify-between">
        <div className="w-2/3 h-full p-5 flex flex-col justify-between ">
          <div className="relative w-full h-7/11 rounded-4xl">
            {/* api should be changed */}
            <img className="w-full h-full rounded-4xl object-cover"  
             src={details?.imageAddress ? details?.imageAddress : courseImage}  
             alt="" />
            <button className="likes btn h-10 p-5 items-center bg-[url(/cardIcons/likes.svg)] bg-no-repeat bg-[50%] bg-[size:25px] bg-pink-100 border-0 rounded-2xl absolute top-5 right-5">
              {/* <span className="border-1 w-full text-left text-xl text-red-600">5</span> */}
            </button>
            <span className="absolute bottom-5 left-10 w-30 h-12 rounded-4xl bg-[url(/cardIcons/clock.svg)] bg-no-repeat bg-[85%] bg-[size:25px] bg-white text-left pl-5 leading-12">{"۵ ساعت"}</span>
            <span className="absolute bottom-5 left-45 w-30 h-12 rounded-4xl bg-[url(/cardIcons/note-2.svg)] bg-no-repeat bg-[85%] bg-[size:25px] bg-white text-left pl-5 leading-12">{"۱۲ درس"}</span>
          </div>
          {/* title */}
          <div className="w-full h-2/11 flex flex-col justify-between">
            <h2 className="text-4xl text-justify">
              {details?.title}
            </h2>
            <p className="text-base text-justify">
            {details?.miniDescribe}
            </p>
          </div>
          {/* rate */}
          <div className="w-full h-1/11 items-center">
            <Rating 
            />
          </div>
        </div>
        <div className="w-3/10 h-6/8 flex flex-col justify-between p-2 pt-5">
          <div className="w-full h-6/8 rounded-4xl bg-white items-center pr-7 pl-7">
            <h6 className="font-bold text-2xl h-1/8 items-center justify-center flex">
              مشخصات دوره
            </h6>
            <CourseInfos 
            capacity={details?.capacity}
            status={details?.courseStatusName}
            insertDate={details?.insertDate}
            endTime={details?.endTime}
            cost={details?.cost}
            />
          </div>
          <div className="w-full h-1/6  rounded-4xl bg-white flex justify-start items-center">
            <div className="w-16 h-16">
              <img
                src={teacher?.data?.pictureAddress}
                alt=""
                className="w-full h-full rounded-4xl"
              />
            </div>
            <div className="text-justify">
              <h4 className="">{details?.teacherName}</h4>
              <h6 className="text-xs">{details?.techs?.join("&")}</h6>
            </div>
          </div>
        </div>
      </div>
      {/* dynamic */}
      <div className="w-10/12 h-auto">
        <CourseTabs 
        describe={details?.describe}
        />
      </div>

      <TopCourse />
    </div>
  );
};

export default CourseDetails;
