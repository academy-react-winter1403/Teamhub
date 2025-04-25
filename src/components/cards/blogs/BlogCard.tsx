import { Link } from "react-router-dom";
import cardImg from "../../../assets/images/workingImg.jpg";
import { INews } from "../../../core/services/types/news.type";
import DateAndView from "../../common/DateAndView";


const BlogCard = ({title,currentView,insertDate,miniDescribe, currentImageAddressTumb}: INews ) => {
  
  return (
    <>
      <Link to={"/BlogDetails"} className="w-[30%] h-[450px] shadow rounded-2xl relative">
        <div className="w-full">
          <img
            className="w-full h-[290px] rounded-t-2xl"
            src={currentImageAddressTumb && currentImageAddressTumb !== "Not-set" && currentImageAddressTumb !== "null"
              ? currentImageAddressTumb : cardImg}
            alt="not found"
          />
        </div>
        <div className="flex flex-col text-right p-2 ">
          <h3 className="font-bold text-xl py-3 truncate">
            {title}
          </h3>
          <p className="pb-4 font-normal text-sm text-[rgba(69,90,100,1)]">
              {miniDescribe}
          </p>

        </div>
        <div className="absolute bottom-2">
          <DateAndView date={insertDate} view={currentView}/>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
