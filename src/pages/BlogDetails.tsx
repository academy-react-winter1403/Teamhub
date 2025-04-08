// import testVideo from "./../assets/images/testVideo.mp4";

import Comment from "../components/common/Comment";
import Rating from "../components/common/Rating";
import BlogHero from "../components/articles/BlogHero";
import BlogText from "../components/articles/BlogText";
import ShareComp from "../components/common/buttons/ShareBtns";

const BlogDetails = () => {
  return (
    <div className="bg-gray-100 w-full flex flex-col justify-between items-center">
      <BlogHero />

      <BlogText />

      {/* <div className="w-[842px] h-[480px]  mx-auto mb-15 rounded-2xl  ">
        <video className="w-full rounded-lg shadow-lg" controls autoPlay loop>
          <source src={testVideo} type="video/mp4" />
        </video>
      </div> */}
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

      <ShareComp />

      <div className="w-[842px] flex justify-between items-center">
        <Rating />
      </div>
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
