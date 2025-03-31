import mainImg from "../assets/images/BlogMainImg.svg";
import bgMain from "../assets/images/Rectangle24.svg";
import mainDot1 from "../assets/images/dot1.svg";
import mainDot2 from "../assets/images/dot2.svg";
import mainDot3 from "../assets/images/dot3.svg";
import mainEllipse from "../assets/images/Ellipse.svg";
const Blogs = () => {
  return (
    <div className="w-full bg-[#FAFBFC] mt-5 mb-50">
      <div className="w-12/13 h-[450px] relative  ">
        <img className="absolute left-0 z-100 " src={mainImg} alt="not found" />
        <img
          className="absolute right-65 mt-80 "
          src={mainEllipse}
          alt="not found"
        />
        <img className="absolute right-0 mt-17 " src={bgMain} alt="not found" />
        <img
          className="absolute right-12 mt-35 "
          src={mainDot1}
          alt="not found"
        />
        <img
          className="absolute top-24 left-95 mt-40 "
          src={mainDot3}
          alt="not found"
        />
        <img
          className="absolute left-160 mt-20 "
          src={mainDot2}
          alt="not found"
        />
        <div className=" w-5/12 text-right relative top-43 right-17">
          <h1 className="font-black text-4xl mb-3 ">اخبار و مقالات هگزا اسکواد</h1>
          <p className="font-medium text-base  "> 
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.
          </p>
        </div>
      </div>
    </div>
  );
};

export { Blogs };
