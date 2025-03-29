import blogAvatarImg from "./../../assets/images/blogAvatarImg.png";
import messagesIcon from "./../../assets/images/messagesIcon.svg";
import heartIcon from "./../../assets/images/heartIcon.svg";
function Comment() {
  return (
    <>
      <div className="flex flex-col w-full h-[250px] gap-5 mr-[-11px] justify-center items-center  ">
        <textarea
          className="textarea just  w-full   h-40 text-sm font-normal text-[rgba(69,90,100,1)] rounded-2xl focus:outline-none focus:border-none max-h-40 min-h-40"
          placeholder="نظر خودتو بنویس..."
        ></textarea>
        <button className="btn rounded-full   text-xs font-bold text-white w-[70px] h-[40px] bg-[rgba(33,150,243,1)]">
          ارسال
        </button>
      </div>
      <div className="w-full h-[100px]  mr-[-11px] ">
        <div className="flex justify-between items-center">
          <div className="w-[150px] h-[40px]  flex  p-2 justify-between items-center">
            <div className="avatar">
              <div className="w-[40px] rounded-full mb-2">
                <img src={blogAvatarImg} />
              </div>
            </div>
            <p className="font-medium text-base">محمد زمانی</p>
          </div>
          <p className="font-normal text-xs">2 روز پیش</p>
        </div>
        <p className="w-full h-[22px] text-[rgba(69,90,100,1)] text-sm font-normal line-clamp-1">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.
        </p>
        <div className="w-[100px] h-[25px]  mt-2 flex justify-between items-end gap-2 mr-5  ">
          <div className="w-[28px] h-[19px]  flex items-center justify-between gap-1">
            <p className="text-red-500"> 7</p>
            <img className=" h-[16px]" src={heartIcon} alt="not found" />
          </div>
          <div className="w-[50px] h-[22px]  flex items-center justify-between gap-1">
            <p className="text-[rgba(69,90,100,1)]"> پاسخ</p>
            <img className="h-[16px]" src={messagesIcon} alt="not found" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
