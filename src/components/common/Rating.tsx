import dislikeIcon from "./../../assets/images/dislike.svg";
import likeIcon from "./../../assets/images/like.svg";
function Rating({currentLikeCount, currentDissLikeCount}: any) {
  return (
    <>
      <div className="w-full h-[60px]  flex justify-between items-center mx-auto mb-10 ">
        <div className="w-[328px] h-[32px] flex items-center gap-3 ">
          <div className="rating rating-hidden flex-row-reverse ">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
              aria-label="2 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2  bg-yellow-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
              aria-label="5 star"
            />
          </div>
          <span className="text-base font-medium">امتیاز 20 نفر</span>
          <button className="btn rounded-full text-xs font-bold text-white h-[38px] bg-[rgba(33,150,243,1)]">
            ثبت دیدگاه
          </button>
        </div>

        <div className="w-[370px] h-[48px] flex justify-between items-center gap-3">
          <p className="text-[rgba(69,90,100,1)]">
            آیا از این مقاله راضی بودید؟
          </p>

          <div className="w-[182px] h-[42px] flex gap-4">
            <button className="btn w-[83px] h-[42px] rounded-3xl bg-[rgba(236,239,241,1)] flex justify-center items-center gap-2 ">
              {" "}
              <img src={likeIcon} alt="not found" /> {currentLikeCount}
            </button>
            <button className=" btn  w-[83px] h-[42px] rounded-3xl bg-[rgba(236,239,241,1)] flex justify-center items-center gap-2">
              {" "}
              <img src={dislikeIcon} alt="not found" /> {currentDissLikeCount}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rating;
