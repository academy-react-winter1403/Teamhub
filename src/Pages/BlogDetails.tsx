import blogImg from "./../assets/images/photo.svg";
import avatarImg from "./../assets/images/avatar.png";
import testVideo from "./../assets/images/testVideo.mp4";
import shareText from "./../assets/images/title.svg";
import igIcon from "./../assets/images/igIcon.svg";
import xIcon from "./../assets/images/xIcon.svg";
import fIcon from "./../assets/images/fIcon.svg";
import Comment from "../components/comment/Comment";
import DateAndView from "../components/dateAndView/DateAndView";
import Rating from "../components/rating/Rating";

const BlogDetails = () => {
  return (
    <div className="bg-gray-100">
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
      <div className=" w-[842px] text-right mx-auto  ">
        <h1 className="text-2xl font-bold pb-5">چگونه اموزش ببینیم ؟</h1>
        <p className="font-normal text-base leading-[28px] text-[rgba(69,90,100,1)]">
          قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو برای همه
          افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت. ولی خب هدف
          تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون مطلب است ولی
          آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و همه به درک عمیقی
          از اون مطلب میرسند؟ قطعا خیر. در ادامه به نحوه رسیدن به درک عمیق مطلب،
          مناسب برای تمامی افراد صحبت خواهیم کرد.
          <br /> مثال:
          <br /> فرض کنید شما در حال خواندن یک کتاب هستید، در صفحه 30 یک چیزی را
          متوجه نشدین. در حالت عادی شما به یک صفحه قبل میروید و دوباره خواندن را
          شروع میکنید و فرض کنید در صفحه 40 هم دقیقا همین اتفاق میافتد و به یک
          صفحه قبل برمیگردید و دوباره خواندن را شروع میکنید و تا رسیدن به آخرین
          صفحه این کتاب این چرخه بارها و بارها اتفاق میافتد. نکته و البته جواب
          ما اینجاست که شما اگر در صفحه 30 نکته را متوجه نشدین، برای رسیدن به
          درک عمیق باید به جای صفحه قبلی، به صفحه 1 کتاب برگردین و کتاب را از
          اول دوباره بخوانید، دوباره اگر در صفحه 50 نکته ای را متوجه نشدین،
          دوباره کتاب را از اول شروع کنید. شما تا پایان این کتاب به درک عمیق اون
          مطلبی که قرار بود آموزش ببینید میرسید.
        </p>
        <ul
          className="text-base font-medium leading-[28px] pb-4 pt-3 pr-4 marker:text-blue-500"
          style={{ listStyleType: "disc" }}
        >
          <li className="pb-5 font-medium text-[rgba(69,90,100,1)]">
            <h1 className="inline font-bold text-gray-800">افزایش انرژی:</h1>{" "}
            کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به جریان خون،
            کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند. این احتشام
            ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به ارمغان بیاورد.
          </li>
          <li className="text-base font-medium leading-[28px] pb-4 text-[rgba(69,90,100,1)] ">
            <h1 className=" inline font-bold text-gray-800">افزایش هوشیاری:</h1>{" "}
            مصرف قهوه می‌تواند تمرکز و هوشیاری شمارا بهبود بخشد. کافئین می‌تواند
            عملکرد مغزی را بهبود دهد و به شما کمک کند در موقعیت‌های مختلف ازجمله
            مطالعه، کار، و مذاکره بهتر عمل کنید.
          </li>
          <li className="text-base font-medium leading-[28px] pb-4 text-[rgba(69,90,100,1)]">
            <h1 className=" inline font-bold text-gray-800">
              افزایش سطح انرژی بدن:{" "}
            </h1>{" "}
            کافئین می‌تواند به افزایش سطح هورمون‌هایی مانند اپینفرین (آدرنالین)
            کمک کند. این هورمون‌ها به تنظیم مقدار قند خون و افزایش فعالیت قلب و
            عروق کمک می‌کنند، که نتیجه آن افزایش انرژی و تحرک در بدن است.
          </li>
        </ul>
      </div>
      <div className="w-[842px] h-[480px]  mx-auto mb-15 rounded-2xl  ">
        <video className="w-full rounded-lg shadow-lg" controls autoPlay loop>
          <source src={testVideo} type="video/mp4" />
        </video>
      </div>
      <div className="w-[842px] h-[100px] mx-auto text-right mb-16  ">
        <p className=" w-[842px] h-[56px] font-normal text-base leading-[28px] mb-10  text-[rgba(69,90,100,1)] ">
          این مثال برای آموزش از روی کتاب بود ولی برای ویدئو یا پادکست یا هر
          آنچه که میتوانید از آن مطلبی یاد بگیرید هم صدق میکند. شما در مثال بالا
          با هر بار از نو آموزش دیدن، هم مطلب را مرور میکنید و هم نکته هایی مهم
          که در طول آموزش متوجه نشده بودین را متوجه میشوید و این اصل قضیه است.
        </p>
        <p className=" w-[842px] h-[28px] font-normal text-base leading-[28px]  text-[rgba(69,90,100,1)]">
          امیدوارم مقاله مفیدی برای شما واقع بوده باشه.
        </p>
      </div>
      <div className="h-[64px] w-[842px] bg-base-300 rounded-2xl flex  mx-auto items-center justify-between mb-10 px-5">
        <div className="w-[103px] h-[25px] ">
          <img src={shareText} alt="not found" />
        </div>
        <div className="w-[128px] h-[32px] flex gap-3 ">
          <img src={fIcon} alt="not found" />
          <img src={xIcon} alt="not found" />
          <img src={igIcon} alt="not found" />
        </div>
      </div>
      <Rating />
      <div className="w-[842px] h-[500px] bg-[rgba(255,255,255,1)] rounded-3xl mx-auto mb-10 p-8 ">
        <h1 className="w-[300px] h-[37px] font-bold text-2xl mx-auto whitespace-nowrap pb-15">
          نظر کاربران درباره این مقاله
        </h1>
        <Comment />
      </div>
    </div>
  );
};

export default BlogDetails;
