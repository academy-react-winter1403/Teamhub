  import dislikeIcon from "./../../assets/images/dislike.svg";
  import likeIcon from "./../../assets/images/like.svg";
  import http from "../../core/services/interceptor"
  import { useParams } from "react-router-dom";
  import { useState } from "react";


  function Rating({currentLikeCount, currentDissLikeCount, currentUserLike, currentUserDissLike,
     currentUserSetRate, currentUserRateNumber}: any) {
    const [isLike, setIsLike] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<number>(0)
    const [hasRated, setHasRated] = useState<boolean>(currentUserSetRate)
    const {id} = useParams()

    const onLike = async() => {
      await http.post(`/Course/AddCourseLike?CourseId=${id}`,{isLike})
    }
      const onDisLike = async() => {
      await http.post(`/Course/AddCourseDissLike?CourseId=${id}`,{isLike})
    }

    const onRating = async (value: number) => {
      try {
        setRatingValue(value);
      } catch (error) {
        console.error("Error in setting rating:", error);
      }
    };
    const submitRating = async () => {
      if (hasRated) {
        alert("شما قبلاً به این دوره امتیاز داده‌اید");
        return;
      }
      if (ratingValue === 0) {
        alert("لطفاً ابتدا امتیاز خود را انتخاب کنید");
        return;
      }
      
      try {
        await http.post(`/Course/SetCourseRating?CourseId=${id}&RateNumber=${ratingValue}`);
          alert("امتیاز شما با موفقیت ثبت شد");
          setHasRated(true);
        } catch (error) {
          console.error("Error in submitting rating:", error);
          alert("قبلا ارسال کرده اید!!");
        }
    };

    return (
      <>
        <div className="w-full h-[60px]  flex justify-between items-center mx-auto mb-10 ">
          <div className="w-[328px] h-[32px] flex items-center gap-3 ">
            <div className="rating rating-hidden flex-row-reverse ">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                  aria-label={`${star} star`}
                  checked={hasRated ? currentUserRateNumber===star : ratingValue === star}
                  onChange={() => onRating(star)}
                  disabled={hasRated}
                />
              ))} 
            </div>
            <span className="text-base font-medium">امتیاز {currentUserRateNumber} نفر</span>
            <button
              onClick={submitRating}
              disabled={currentUserSetRate}
              className="btn rounded-full text-xs font-bold text-white h-[38px] bg-[rgba(33,150,243,1)]">
              ثبت دیدگاه
            </button>
          </div>

          <div className="w-[370px] h-[48px] flex justify-between items-center gap-3">
            <p className="text-[rgba(69,90,100,1)]">
              آیا از این مقاله راضی بودید؟
            </p>

            <div className="w-[182px] h-[42px] flex gap-4">
              <button 
                onClick={() => {
                  setIsLike(true); // کاربر لایک کرده است
                  onLike();
                }} 
                className={(currentUserLike==="1")? "btn w-[83px] h-[42px] rounded-3xl bg-blue-500 flex justify-center items-center gap-2 text-white" :
                  "btn w-[83px] h-[42px] rounded-3xl bg-[rgba(236,239,241,1)] flex justify-center items-center gap-2"
                }
              >
                {" "}
                <img src={likeIcon} alt="not found" /> {currentLikeCount}
              </button>
              <button 
                onClick={() => {
                  setIsLike(true); // کاربر لایک کرده است
                  onDisLike();
                }} 
                className={currentUserDissLike==="1"? "btn w-[83px] h-[42px] rounded-3xl bg-blue-500 flex justify-center items-center gap-2 text-white" :
                  "btn w-[83px] h-[42px] rounded-3xl bg-[rgba(236,239,241,1)] flex justify-center items-center gap-2"
                }
                >
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
