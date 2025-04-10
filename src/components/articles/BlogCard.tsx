import cardImg from "../../assets/images/workingImg.jpg";
import { INews } from "../../core/services/types/news.type";
import DateAndView from "../common/DateAndView";

 

const BlogCard = (props:INews ) => {
  const {title,id,currentView,insertDate,miniDescribe,currentImageAddressTumb} = props
  return (
    <>
      <div className="w-[31.8%] h-[450px] shadow rounded-2xl">
        <div className="w-full  ">
          <img
            className="w-[450px] h-[290px] rounded-t-2xl"
            src={cardImg}
            alt="not found"
          />
        </div>
        <div className="flex flex-col  text-right p-2 ">
          <h3 className="font-bold text-xl py-3 truncate">
            {title}
          </h3>
          <p className="pb-4 font-normal text-sm text-[rgba(69,90,100,1)]">
              {miniDescribe}
          </p>
          <div className=" flex justify-start ">
            <DateAndView date={insertDate} view={currentView}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
