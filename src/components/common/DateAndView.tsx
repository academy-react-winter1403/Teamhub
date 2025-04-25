import { FC } from "react";
import calImg from "./../../assets/images/calendar-2.svg";
import eyeImg from "./../../assets/images/eye.svg";
import dateFormatter from "../../core/utility/dateFormatter";
interface IProps{
  date:string
  view:number
}
const DateAndView:FC<IProps> =  ({date,view})=> {
  return (
    <>
      <div className="flex items-center justify-center gap-4 w-[230px] h-[22px] text-blue-500 mr-5 ">
        <div className="flex items-center text-[14px] flex-row-reverse gap-1.5">
          {view} بازدید{" "}
          <img className="size-4 mb-1" src={eyeImg} alt="not found" />
        </div>
        <div className="w-2 h-2 rounded-full bg-blue-500 "></div>
        <div className="flex flex-row-reverse text-[16px] items-center gap-1.5 ">
          {dateFormatter(date)}
          <img className="size-4 mb-1" src={calImg} alt="not found" />
        </div>
      </div>
    </>
  )
}

export default DateAndView