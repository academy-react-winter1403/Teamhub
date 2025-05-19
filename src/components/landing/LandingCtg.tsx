import CtgCards from "../cards/landing/ui/CtgCards";
import { LandingCtgSub } from "../../core/constants/mock/LandingCtg";

const LandingCtg = () => {
  return (
    <div className="relative w-full h-[750px] mb-20">
      {/* content */}
      <div className="h-full flex justify-evenly items-center z-50">
        {/* right */}
        <div className="w-1/4 h-38 flex flex-col justify-between z-50">
          <h4 className="font-black text-4xl text-justify z-50">
            {LandingCtgSub[0].title}
          </h4>
          <p className="font-medium text-base text-justify z-50">
            {LandingCtgSub[0].desc}
          </p>
        </div>
        {/* left */}
        <div className="w-2/4 h-full flex justify-evenly z-50">
          <CtgCards />
        </div>
      </div>
      {/* background */}
      <div className="relative w-full h-120">
        <span className="absolute block bg-no-repeat bg-contain bg-[url(./dot.svg)] w-100 h-38 bottom-140 right-90"></span>
        <span className="absolute block bg-no-repeat bg-contain bg-[url(./Ellipse.svg)] size-32 bottom-140 right-160"></span>
        <span className="absolute block bg-no-repeat bg-contain bg-[url(./RectangleBlue.svg)] w-250 h-120 bottom-160 left-0"></span>
        <span className="absolute block bg-no-repeat bg-contain bg-[url(./RectangleYellow.svg)] size-40 bottom-210 right-25"></span>
      </div>
    </div>
  );
};

export default LandingCtg;
