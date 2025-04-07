import React from "react";
import { LandingHeroTxt } from "../../core/constants/mock/LandingHero";
const LandingTitles = () => {
  return (
    <>
      <div className="flex flex-col h-50 md:h-50 lg:h-60 md:flex-col justify-between md:justify-between">
        {LandingHeroTxt.map((item, index) => {
          const tags: string[] = ["h3", "h2", "h5"];
          const Tag = tags[index];
          const textSize = ["text-2xl", "text-7xl", "text-xl"][index];
          return React.createElement(
            Tag,
            { key: index, className: textSize },
            item.title
          );
        })}
      </div>
    </>
  );
};

export default LandingTitles;
