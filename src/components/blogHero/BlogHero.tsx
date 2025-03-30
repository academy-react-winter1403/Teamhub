import DateAndView from "../../components/dateAndView/DateAndView";
import blogImg from "./../../assets/images/photo.svg";
import avatarImg from "./../../assets/images/avatar.png";

const BlogHero = () => {
  return (
    <>
      <div className="w-[1280px] h-[340px]  flex mx-auto mt-10 mb-15 ">
        <div className=" w-[515px] h-[340px] ">
          <img src={blogImg} alt="not found" />
        </div>
        <div className="">
          <div className="w-[733px] h-[275px] pr-5  font-bold text-right ">
            <h1 className="text-[32px] pb-5 text-[rgba(38,50,56,1)] ">
              چگونه مطالعه موثر را برای شما آسانتر کنیم.
            </h1>
            <p className="text-[16px] font-normal leading-6 text-[rgba(69,90,100,1)] ">
              همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص
              مثل آموزش از کتاب، ویدئو یا هر آنچه که برای آموزش است نخواهد بود و
              این مقاله به صورت جامع در مورد چگونگی آموزش دیدن و یادگیری
              است.همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع
              خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که همانطور که از عنوان
              مقاله مشخص است،
              <br /> صحبت ما روی آموزش دیدن و یادگیری است.همانطور که از عنوان
              مقاله. قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو
              برای همه افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت.
              ولی خب هدف تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون
              مطلب است ولی آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و
              همه به درک عمیقی از اون مطلب میرسند؟ قطعا خیر.
            </p>
          </div>
          <div className="flex items-center justify-between flex-row-reverse">
            <div className=" flex flex-row-reverse gap-2 justify-end items-center w-[186px] h-[64px] bg-[rgba(255,255,255,1)]  rounded-2xl  ">
              <p className="whitespace-nowrap text-[16px]"> امیرحسین ملکی</p>
              <div className=" w-[40px] h-[40px] mr-4 ml-2 ">
                <img className="rounded" src={avatarImg} alt="not found" />
              </div>
            </div>
            <DateAndView />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
