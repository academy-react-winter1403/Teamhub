import DateAndView from "../common/DateAndView";
import blogImg from "./../../assets/images/Rectangle 34.png";
import avatarImg from "./../../assets/images/avatar.png";

const BlogHero = ({img, title, miniDescribe, date, view}: any) => {

  return (
    <>
      <div className="w-[1280px] h-[340px] flex mx-auto mt-10 mb-15 ">
        <div className="relative w-[515px] h-[340px] ">
          <img 
          src={img && img !== "null" ? img : blogImg}
          alt="not found" />
          <button className="likes btn absolute top-5 right-5 h-10 p-5 items-center bg-[url(/cardIcons/likes.svg)] bg-no-repeat bg-[50%] bg-[size:25px] bg-pink-100 border-0 rounded-2xl"></button>
        </div>
        <div className="">
          <div className="w-[733px] h-[275px] pr-5  font-bold text-right ">
            <h1 className="text-[32px] mb-10 pt-5 text-[rgba(38,50,56,1)] ">{title}</h1>
            <p className="text-[16px] font-normal leading-6 text-[rgba(69,90,100,1)] ">
              {miniDescribe}
              </p>
          </div>
          <div className="flex items-center justify-between flex-row-reverse">
            <div className=" flex flex-row-reverse gap-2 justify-end items-center w-[186px] h-[64px] bg-[rgba(255,255,255,1)] rounded-2xl">
              <p className="whitespace-nowrap text-[16px]"> امیرحسین ملکی</p>
              <div className=" w-[40px] h-[40px] mr-4 ml-2">
                <img className="rounded" src={avatarImg} alt="not found"/>
              </div>
            </div>
            <DateAndView 
            date= {date}
            view= {view}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
