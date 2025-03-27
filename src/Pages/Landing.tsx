import LandingTitles from "../components/LandnigTitles";
import Search from "../components/common/search/Search";
import LandingReport from "../components/cards/landingReport/LandingReport";
import {
  AngularIcon,
  Css,
  Figma,
  Html5,
  NodeJs,
  ReactIcon,
  Sass,
  Vue,
} from "../core/icons/landing/BannerIcons";

const Landing = () => {
  return (
    <>
      {/* landing banner */}
      <div className="relative -top-25 bg-[url(/header-bg.svg)] bg-bottom bg-no-repeat bg-cover w-full h-[900px] min-h-screen mb-20 z-0 flex justify-center items-center">
        <div className="flex flex-row justify-around w-full h-2/3">
          <div className="h-112 w-40 flex flex-col justify-between">
            <ReactIcon />
            <AngularIcon />
            <Css />
            <Html5 />
          </div>
          {/* banner */}
          <div className="flex flex-col justify-between gap-2.5 flex-nowrap w-3xl">
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

      {/* landing services */}

      {/* landing course */}

      {/* landing category */}

      {/* landing teacheres */}

      {/* landing news */}
    </>
  );
};

export { Landing };
