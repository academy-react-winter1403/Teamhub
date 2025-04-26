import { useState } from "react";
import http from "../../../core/services/interceptor"
const URL= import.meta.env.VITE_API_BASE_URL

const BlogSorting = ({setCardList}: any) => {
  const [activeTab, setActiveTab] = useState("all");

  const fetchData = async(sortingCol: string, sortType: string)=> {
    const result= await http.get(URL + `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=12&SortingCol=${sortingCol}&SortType=${sortType}&TechCount=0`)
    const ObjArray= Object.values(result.data)
    setCardList(ObjArray[0])
    console.log(ObjArray[0])
  }
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case "all":
        fetchData("active", "ASC");
        break;
      case "popular":
        fetchData("viewCount", "DESC");
        break;
      case "mostViewed":
        fetchData("viewCount", "DESC");
        break;
      case "latest":
        fetchData("InsertDate", "DESC");
        break;
      default:
        fetchData("all", "DESC");
    }
  };
  return (
    <div className="w-[50%] flex justify-around items-center bg-white rounded-2xl drop-shadow-sm tabs tabs-boxed">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl hover:bg-blue-400 hover:text-white  checked:bg-blue-400 checked:text-white "
          aria-label="همه"
          checked={activeTab === "all"}
          onChange={()=> handleTabClick("all")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl hover:bg-blue-400 hover:text-white  checked:bg-blue-400 checked:text-white "
          aria-label="محبوب‌ترین‌ها"
          checked={activeTab === "popular"}
          onChange={() => handleTabClick("popular")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl hover:bg-blue-400 hover:text-white  checked:bg-blue-400 checked:text-white "
          aria-label="پربازدیدترین‌ها"
          checked={activeTab === "mostViewed"}
          onChange={() => handleTabClick("mostViewed")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl hover:bg-blue-400 hover:text-white  checked:bg-blue-400 checked:text-white "
          aria-label="جدیدترین‌ها"
          checked={activeTab === "latest"}
          onChange={() => handleTabClick("latest")}
        />
      </div>
  )
}

export {BlogSorting}