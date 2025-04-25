import React from 'react'
import { BlogsHeroTxt } from '../../../core/constants/mock/BlogsHero';

const BlogsTitles = () => {
  return (
    <div className="flex items-center w-12/13 h-130 bg-[url(./assets/images/blogBanner.png)] bg-no-repeat  bg-cover relative mb-15 p-25">
        <div className="flex flex-col gap-6 text-justify w-160">
            {BlogsHeroTxt.map((item, index) => {
            const tags: string[] = ["h2", "h5"];
            const Tag = tags[index];
            const textStyle = ["text-5xl", "text-xl text-gray-600"][index];
            return React.createElement(
                Tag,
                { key: index, className: textStyle },
                item.title
            );
            })}
        </div>
    </div> 
)
}

export {BlogsTitles}