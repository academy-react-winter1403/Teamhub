import React from 'react'
import { BlogsHeroTxt } from '../../../core/constants/mock/BlogsHero';
import mainBaner from "../../../assets/images/blogBanner/BlogMainImg.svg"
import dot2 from "../../../assets/images/blogBanner/dot2.svg"
import dot3 from "../../../assets/images/blogBanner/dot3.svg"
import rect from "../../../assets/images/blogBanner/Rectangle24.svg"
import ellipse from "../../../assets/images/blogBanner/Ellipse.svg"


const BlogsTitles = () => {
  return (
    <div className="flex xl:flex-row lg:flex-col md:flex-col md:gap-20 justify-between items-center w-12/13 xl:h-140  relative mb-15 p-25">
        <img src={dot2} className='absolute right-140 top-30 hidden xl:block' alt="" />
        <img src={dot3} className='absolute right-180 top-70 hidden xl:block' alt="" />
        <img src={rect} className='absolute right-0 top-30 z-20 hidden xl:block' alt="" />
        <img src={ellipse} className='absolute right-65 top-95 hidden xl:block' alt="" />

        <div className="flex flex-col gap-6 xl:text-justify md:text-center w-160 z-200">
            {BlogsHeroTxt.map((item, index) => {
            const tags: string[] = ["h2", "h5"];
            const Tag = tags[index];
            const textStyle = ["xl:text-5xl lg:text-3xl md:text-2xl", "xl:text-xl lg:text-md text-gray-600"][index];
            return React.createElement(
                Tag,
                { key: index, className: textStyle },
                item.title
            );
            })}
        </div>
        <img src={mainBaner} className=' z-100' alt="" />
    </div> 
)
}

export {BlogsTitles}