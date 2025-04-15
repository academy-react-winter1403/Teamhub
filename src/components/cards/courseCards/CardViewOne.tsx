import { Link } from "react-router-dom"
import { CourseState2 } from "../../../core/constants/Types"

const CardViewOne = ({title, teacherName, cost}: CourseState2) => {
  return (
    <Link to="/CourseDetails" className="bg-white shadow-md rounded-2xl mb-5 p-4 w-80">
        <img 
          src={"./cardIcons/cardImage.svg"} alt="item"
          className="rounded-xl object-cover w-full min-h-30"
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
            <button className="likes btn w-7 h-7 items-center bg-[url(/cardIcons/likes.svg)] bg-no-repeat bg-center bg-contain bg-white border-0">
            </button>
            <span className="price font-semibold text-lg text-blue-500">{cost +" تومان"}</span>
          </div>
        </div>
      </Link>
  )
}

export {CardViewOne}