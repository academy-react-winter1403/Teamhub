import { CourseCards } from "../components/cards/courseCards/CourseCards"
import Search from "../components/common/search/Search"

const CourseList = () => {
  return (
    <div className="bg-[#FAFBFC] relative">
        <div className="w-full h-25 bg-[#FAFBFC] absolute -top-25"></div>
        <div className="banner h-130 w-[90%] bg-[url(/courseListBanner.png)] bg-no-repeat bg-center bg-contain  "></div>
        <div className="m-auto w-[88%] flex justify-center gap-5 mt-10">
            <div className="filters w-70 h-25 border-1 rounded-2xl">
            </div>
            
            <div className="courses w-218 border-1 rounded-xl">
                <div className="top flex justify-between mb-10">
                    <div className="viewIcon w-37 h-11 bg-gray-300 rounded-xl flex items-center justify-center gap-2">
                      <div className="w-[40%] h-[80%] bg-white rounded-xl bg-[url(/grid-1.svg)] bg-no-repeat bg-center"></div>
                      <div className="w-[40%] h-[80%] bg-white rounded-xl bg-[url(/grid-2.svg)] bg-no-repeat bg-center"></div>
                    </div>
                    <Search/>
                    <button className="btn w-50 h-11 bg-white  rounded-xl drop-shadow-sm font-light">
                       <img src="./sort.svg" alt="" />
                       محبوب ترین ها
                       <img src="./arrow-down.svg" className="mr-5" alt="" /> 
                    </button>
                </div>

                <div className="courseCards flex justify-between gap-2 border-1 border-blue-500">
                  <CourseCards/>
                  <CourseCards/>
                  <CourseCards/>

                </div>

                
            </div>
        </div>
    </div>
  )
}

export {CourseList}