import { CourseState } from "../../../core/constants/Types"

const CardViewTwo = ({title, teacherName, describe, cost}: CourseState) => {
  return (
    <div className="bg-white relative shadow-md rounded-2xl mb-5 p-4 w-full h-50 flex items-center gap-4" >
      <img
        src={"./cardIcons/cardImage.svg"} alt="item"
        className="rounded-xl object-cover w-55 h-full"
      />
      <button className="likes btn flex justify-around w-8 h-8 items-center bg-[url(/cardIcons/likes.svg)]  bg-no-repeat bg-center bg-contain bg-white text-red-400 p-1 border-0 rounded-xl absolute top-5 left-5">
      </button>
      <div className="flex-1 items-center w-[70%]">
        <h3 className="font-medium text-right text-md">{title}</h3>
        <p className="description w-full text-justify text-sm mt-2 text-gray-500">{describe}</p>
        <div className="flex items-center justify-between w-full mt-5">
          <div className="flex justify-between w-[75%] items-center text-gray-500 mt-2 bg-gray-200 p-3 rounded-3xl text-sm gap-2">
            <span className="w-[23%] bg-[url(/cardIcons/teacher.svg)] bg-no-repeat bg-right text-left">{teacherName}</span>
            <span className="w-[15%] bg-[url(/cardIcons/profile-2user.svg)] bg-no-repeat bg-right text-left">{"۱۲۰ دانشجو"}</span>
            <span className='w-[11%] bg-[url(/cardIcons/note-2.svg)] bg-no-repeat bg-right  text-left'>{"۱۲ درس"}</span>
            <span className='w-[12%] bg-[url(/cardIcons/clock.svg)] bg-no-repeat bg-right text-left'>{"۵ ساعت"}</span>
            <span className='w-[14%] bg-[url(/cardIcons/calendar-2.svg)] bg-no-repeat bg-right text-left'>{"ا آذر 1402"}</span>
          </div>
          <span className="price font-bold text-xl text-blue-500">
            {cost + " تومان"}
          </span>
        </div>

      </div>
    </div>
  )
}

export {CardViewTwo}