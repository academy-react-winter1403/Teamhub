import { Link } from "react-router-dom"
import { CourseState } from "../../../core/constants/Types";
import courseImage from "../../../assets/images/CourseImg.svg"

const CardViewOne = ({courseId, title, teacherName, cost, tumbImageAddress}: CourseState) => {
  return (
    <Link to={"/CourseDetails/"+ courseId} className="bg-white shadow-md rounded-2xl mb-5 p-4 w-80">
        <img 
          src={tumbImageAddress && tumbImageAddress !== "Not-set" ? tumbImageAddress : courseImage} alt="item"
          className="rounded-xl object-cover w-full h-45 "
        />
        <div className="mt-3">
          <h3 className="title font-medium text-right text-lg mr-3">{title}</h3>

          <div className="flex justify-between items-center text-gray-600 mt-2 bg-gray-200 p-3 pl-0 rounded-3xl text-sm">
            <span className='lesson w-[30%] bg-[url(/cardIcons/note-2.svg)] bg-no-repeat bg-right'>{"۱۲ درس"}</span>
            <span className='course-time w-[34%] bg-[url(/cardIcons/clock.svg)] bg-no-repeat bg-right'>{"۵ ساعت"}</span>
            <span className='course-date w-[37%] bg-[url(/cardIcons/calendar-2.svg)] bg-no-repeat bg-right'>{"ا آذر 1402"}</span>
          </div>
  
          <div className="flex justify-between mt-3 text-sm gap-3" >
            <span className="teacher text-gray-500">مدرس: {teacherName}</span>
            <span className="students text-gray-500">{"۱۲۰ دانشجو"}</span>
          </div>
  
          <div className="flex mt-3 items-center relative justify-between">
            <button className="likes btn  h-10 p-5 items-center bg-[url(/cardIcons/likes.svg)] bg-no-repeat bg-[50%] bg-[size:25px] bg-pink-100 border-0 rounded-2xl">
              {/* <span className="border-1 w-full text-left text-xl text-red-600">5</span> */}
            </button>
            <span className="price font-semibold text-lg text-blue-500">{cost +" تومان"}</span>
          </div>
        </div>
      </Link>
  )
}

export { CardViewOne };
