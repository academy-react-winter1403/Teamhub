import { Link } from "react-router-dom";
import cardImg from "../../../assets/images/workingImg.jpg";
// import { INews } from "../../../core/services/types/news.type";
import DateAndView from "../../common/DateAndView";
interface newsprops{
  id:number
  title: string
  currentView:number
  insertDate:string
  miniDescribe:string
  currentImageAddressTumb: string
}

const BlogCard = ({id,title,currentView,insertDate,miniDescribe, currentImageAddressTumb}: newsprops ) => {
  
  return (
    <>
      <Link to={"/BlogDetails/"+ id} className="w-120 flex flex-col justify-between shadow rounded-2xl">
        <div className="w-full">
          <img
            className="w-full h-[290px] rounded-t-2xl"
            src= {currentImageAddressTumb ? currentImageAddressTumb : cardImg}
            alt="not found"
          />
        </div>
        <div className="flex flex-col text-right p-5 ">
          <h3 className="font-bold text-xl py-3 truncate">
            {title}
          </h3>
          <p className="pb-4 font-normal text-sm text-[rgba(69,90,100,1)]">
              {miniDescribe}
          </p>

        </div>
        <div className="">
          <DateAndView date={insertDate} view={currentView}/>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
