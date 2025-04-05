import cardImg from "../../assets/images/workingImg.jpg";
import DateAndView from "../common/DateAndView";
const BlogCard = () => {
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
          <h1 className="font-bold text-xl py-3">
            {" "}
            چگونه مطالعه موثر را برای شما آسانتر کنیم.
          </h1>
          <p className="pb-4 font-normal text-sm text-[rgba(69,90,100,1)]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد.
          </p>
          <div className=" flex justify-start ">
            <DateAndView />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
