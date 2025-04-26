import Comment from "../components/common/Comment";
import Rating from "../components/common/Rating";
import BlogHero from "../components/articles/BlogHero";
import BlogText from "../components/articles/BlogText";
import ShareComp from "../components/common/buttons/ShareBtns";
import { useEffect, useState } from "react";
import { INews } from "../core/services/types/news.type";
import { useParams } from "react-router-dom";
import http from "../core/services/interceptor"
const URL= import.meta.env.VITE_API_BASE_URL

const BlogDetails = () => {
  const [detail, setdetail] = useState<INews>()
  const { id } = useParams();

  const getBlogsData= async(id: string) => {
    const result= await http.get(URL + "/News/"+ id)
    const ObjArray = Object.values(result)
    setdetail(ObjArray[0].detailsNewsDto)
    console.log(ObjArray[0].detailsNewsDto)
  }
  useEffect(() => {
    if(id){
    getBlogsData(id)
    }
  }, [id])

  return (
    <div className="bg-gray-100 w-full flex flex-col justify-between items-center">
      <BlogHero 
        miniDescribe= {detail?.miniDescribe}
        title= {detail?.title}
        date= {detail?.insertDate}
        view= {detail?.currentView}
        img= {detail?.currentImageAddress}
      />


      <BlogText 
       describe= {detail?.describe}/>

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
        <Rating 
        currentLikeCount= {detail?.currentLikeCount}
        currentDissLikeCount= {detail?.currentDissLikeCount}/>
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
