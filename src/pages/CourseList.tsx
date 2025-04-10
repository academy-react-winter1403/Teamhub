import { useEffect, useState } from "react";
import { WrapperViewOne } from "../components/cards/courseCards/wrapper/WrapperViewOne";
import { WrapperViewTwo } from "../components/cards/courseCards/wrapper/WrapperViewTwo";
import { Pagination } from "../components/common/Pagination";
import { Search } from "../components/courseList/search/Search";
import { Filters } from "../components/courseList/filter/Filters";
import { getCourseList } from "../core/services/api/CourseList";

const CourseList = () => {
  interface Course {
    title: string;
  }
  const [cardList, setCardList] = useState<Course[]>([]);
  const [originalData, setoriginalData] = useState<Course[]>([]);

  const getCouseData = async () => {
    const response = await getCourseList();
    const dataArray = Object.values(response);
    setCardList(dataArray[0] as Course[]);
    setoriginalData(dataArray[0] as Course[]);
    console.log(dataArray[0]);
  };

  useEffect(() => {
    getCouseData();
  }, []);

  return (
    <div className="bg-[#FAFBFC] relative w-full flex flex-col justify-center items-center">
      <div className="banner flex items-center h-130 w-[90%] bg-[url(/courseListBanner.svg)] bg-no-repeat bg-center bg-contain mb-15 p-10">
        <div className="flex flex-col gap-8 w-160">
          <h2 className="text-right font-semibold text-blue-500 text-2xl">
            مهمه از کی یاد می گیری!!
          </h2>
          <h1 className="text-right font-semibold text-5xl">
            آموزش برنامه نویسی با بهترین ها
          </h1>
          <p className="text-xl text-[#263238] text-justify">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.{" "}
          </p>
        </div>
      </div>

      <div className="w-[90%] flex justify-center gap-5">
        <Filters />

        <div className="courses rounded-xl w-[70%]">
          <div className="tabs tabs-box flex bg-[#FAFBFC] mb-5">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab w-10 rounded-full bg-[url(/grid-1.svg)] bg-no-repeat bg-center m-1 mb-8 "
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
              <WrapperViewTwo />
            </div>

            <div className="flex w-[90%]">
              <Search setCardList={setCardList} originalData={originalData} />

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
