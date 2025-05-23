import { Fragment } from "react/jsx-runtime";
import social1 from "../../../assets/images/Social Medias.svg";
import social2 from "../../../assets/images/Social Medias (1).svg";
import social3 from "../../../assets/images/Social Medias (2).svg";
import social4 from "../../../assets/images/Social Medias (3).svg";
import social5 from "../../../assets/images/Social Medias (4).svg";
import copyright from "../../../assets/images/copyright.svg";
import { FooterDataTxt } from "../../../core/constants/mock/FooterData";
import HeaderLogoDark from "../header/HeaderLogoDark";

const Footer = () => {
  return (
    <Fragment>
      <div className="h-125 w-full bg-[#252641] text-white">
        <div>
          <div className="flex flex-row-reverse gap-1.5 justify-center items-end text-2xl pt-10 pb-4 ">
            <HeaderLogoDark />
          </div>
          {FooterDataTxt.map((items, index) => {
            const tags = ["p"];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Tag = tags[index] as any;
            const textSize = [
              "xl:text-[20px] md:text-[18px] font-normal leading-8 pb-5",
            ][index];
            return (
              <Tag key={index} className={textSize}>
                {items.title}
              </Tag>
            );
          })}
          {/* <p className="xl:text-[20px] md:text-[18px] font-normal leading-8 pb-5 ">
            هدف ما سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور
            <br /> با کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت
          </p> */}
        </div>
        <div className="join relative pt-7 flex flex-col gap-8 ">
          <div>
            <p className="font-normal text-base  ">
              برای دریافت اخبار از طریق ایمیل ثبت نام کنید
            </p>
          </div>

          <div className="relative flex justify-center items-center">
            <button className="btn join-item rounded-full relative right-10  z-10 bg-[#2196F3] text-white border-0  ">
              خبرم کن
            </button>
            <input
              className="input join-item text-left rounded-full  min-w-[18%] h-14 bg-white text-[#607D8B] relative left-11 focus:outline-0"
              placeholder="Example@gmail.com  "
            />
          </div>
          <div className="flex justify-center  ">
            <div className="pr-10 pl-10">
              <p className="text-gray-400">دوره های آموزشی </p>
            </div>
            <div className="border-r-2 pr-10 pl-10">
              <p className="text-gray-400">درباره ما</p>
            </div>
            <div className="border-r-2 pr-10 pl-10">
              {" "}
              <p className="text-gray-400">قوانین و مقررات</p>
            </div>
          </div>
        </div>
        <div className=" bg-[rgba(0,0,0,0.2)] w-[90%]   rounded-2xl h-[64px] flex flex-row-reverse justify-between justify-self-center mt-12 mb-10 ">
          <div className="flex justify-end ">
            <img
              className="w-[11%] ml-4"
              src={social1}
              alt="img not found :("
            />
            <img
              className="w-[11%] ml-4"
              src={social2}
              alt="img not found :("
            />
            <img
              className="w-[11%] ml-4"
              src={social3}
              alt="img not found :("
            />
            <img
              className="w-[11%] ml-4"
              src={social4}
              alt="img not found :("
            />
            <img
              className="w-[11%] ml-5"
              src={social5}
              alt="img not found :("
            />
          </div>

          <div className="flex flex-row-reverse gap-2 mr-5 md:w-[70%] justify-end ">
            <p className="flex items-center whitespace-nowrap xl:text-[16px]   md:text-[13px] sm:text-[10px] ">
              تمام حقوق مادی و معنوی این مجموعه متعلق به HexaSquad.ir میباشد
            </p>
            <img
              className="w-4 items-center"
              src={copyright}
              alt="img not found :("
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { Footer };
