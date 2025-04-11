import { useEffect, useState } from "react";
import { WrapperViewOne } from "../components/cards/courseCards/wrapper/WrapperViewOne";
import { WrapperViewTwo } from "../components/cards/courseCards/wrapper/WrapperViewTwo";
import { Pagination } from "../components/common/Pagination";
import {Search} from "../components/courseList/search/Search";
import { Filters } from "../components/courseList/filter/Filters";
import { getCourseList } from "../core/services/api/CourseList";
import CourseListTitles from "../components/courseList/CourseListTitles";
import { CourseState } from "../core/constants/Types";
import { PopularCoursesBtn } from "../components/courseList/PopularCoursesBtn";


const CourseList = () => {

  const [cardList, setCardList] = useState<CourseState[]>([])
  const [originalData, setoriginalData] = useState<CourseState[]>([])

  const getCourseData= async() => {
    const response = await getCourseList()
    const dataArray= Object.values(response)
    setCardList(dataArray[0] as CourseState[])
    setoriginalData(dataArray[0] as CourseState[])
    console.log(dataArray[0])
  }

  useEffect(() => {
    getCourseData()
  }, [])

  return (
    <div className="bg-[#FAFBFC] relative w-full flex flex-col justify-center items-center">
      <CourseListTitles/>
      <div className="w-[90%] flex justify-center gap-5">
        <Filters />

        <div className="courses rounded-xl w-[70%]">
          <div className="tabs tabs-box flex justify-between bg-[#FAFBFC] mb-5">

            <input type="radio" name="my_tabs_6" className="tab bg-[url(/grid-1.svg)] bg-no-repeat bg-center m-1 mb-8 " defaultChecked/>
            <div className="tab-content bg-[#FAFBFC]">
                <WrapperViewOne
                cardList={cardList}
                />
            </div>

            <input type="radio" name="my_tabs_6" className="tab bg-[url(/grid-2.svg)] bg-no-repeat bg-center m-1 "/>
            <div className="tab-content bg-[#FAFBFC] border-base-300">
                <WrapperViewTwo
                cardList={cardList}
                />
            </div>

            <div className="flex w-[90%]">
              <Search
              setCardList={setCardList}
              originalData={originalData}
              />
              <PopularCoursesBtn/>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export { CourseList };