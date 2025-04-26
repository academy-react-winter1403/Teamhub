// import { useEffect } from "react"
import http from "../../core/services/interceptor"
const URL= import.meta.env.VITE_API_BASE_URL

const PopularCoursesBtn = ({ setCardList }: any) => {

  const latestCourses= async()=> {
    const result= await http.get(URL + `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=12&SortingCol=lastUpdate&SortType=DESC&TechCount=0`)
    const ObjArray= Object.values(result.data)
    setCardList(ObjArray[0])
    console.log(ObjArray[0])
  }
  const popularCourses= async()=> {
    const result= await http.get(URL + `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=12&SortingCol=cost&SortType=ASC&TechCount=0`)
    const ObjArray= Object.values(result.data)
    setCardList(ObjArray[0])
  }

  return (
    <div className="dropdown w-[25%]">
      <div tabIndex={0} role="button" className="btn w-full h-12 bg-white rounded-xl shadow-sm text-base text-gray-600">محبوب ترین ها 
        <span className="w-5 h-full bg-[url(/arrow-down.svg)] bg-no-repeat bg-center"></span>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm">
        <li onClick={latestCourses}><a>جدید ترین</a></li>
        <li onClick={popularCourses}><a>ارزان ترین</a></li>
      </ul>
    </div>    
  )
}

export {PopularCoursesBtn}