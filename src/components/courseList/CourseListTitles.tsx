import React from 'react'
import { CourseListHeroTxt } from '../../core/constants/mock/CourseListHero';
import mainBanner from "../../assets/images/courseBanner/courseMainImg.jpg"
import dot from "../../assets/images/courseBanner/Dots.jpg"
import dot1 from "../../assets/images/courseBanner/Dots (1).jpg"
import rect from "../../assets/images/courseBanner/Rectangle 25.jpg"

const CourseListTitles = () => {
  return (
    <div className="banner flex items-center h-130 w-[90%] mb-15 p-10 relative">
        <img src={mainBanner} className='absolute left-40 z-50' alt="" />
        <img src={dot} className='absolute left-210 top-20' alt="" />
        <img src={dot1} className='absolute right-0 top-60' alt="" />
        <img src={rect} className='absolute right-0 top-20' alt="" />

        <div className="flex flex-col gap-6 text-justify w-160 z-200">
            {CourseListHeroTxt.map((item, index) => {
            const tags: string[] = ["h3", "h2", "h5"];
            const Tag = tags[index];
            const textStyle = ["text-2xl text-blue-500", "text-5xl", "text-xl text-gray-600"][index];
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

export default CourseListTitles