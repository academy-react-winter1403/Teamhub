import LandingTitles from "../components/landing/LandingTitles";
import Search from "../components/common/Search";
import LandingReport from "../components/cards/landing/ui/LandingReport";
import Services from "../components/landing/Services";
import TopCourse from "../components/landing/TopCourse";
import LandingCtg from "../components/landing/LandingCtg";
import Teachers from "../components/landing/Teachers";

import {
  AngularIcon,
  Css,
  Figma,
  Html5,
  NodeJs,
  ReactIcon,
  Sass,
  Vue,
} from "../assets/icons/landing/BannerIcons";

import ArticlesSection from "../components/landing/articles-section";

const Landing = () => {
  return (
    <div>
      {/* landing banner */}
      <div className="relative bg-[url(/header-bg.svg)] bg-bottom bg-no-repeat bg-cover w-full min-h-[900px] z-0 flex justify-center items-center">
        <div className="flex flex-row justify-around w-full">
          <div className="h-112 w-40 flex flex-col justify-between">
            <ReactIcon />
            <AngularIcon />
            <Css />
            <Html5 />
          </div>
          {/* banner */}

          <div className="flex flex-col justify-between gap-2.5 flex-nowrap w-4xl">
            <LandingTitles />
            <Search />
            <LandingReport />
          </div>
          <div className="h-112 w-40 flex flex-col justify-between">
            <Sass />
            <NodeJs />
            <Vue />
            <Figma />
          </div>
        </div>
      </div>
      <Services />
      <TopCourse />
      <LandingCtg />
      <Teachers />

      <ArticlesSection />
    </div>
  );
};

export { Landing };
