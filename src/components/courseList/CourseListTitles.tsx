import React from 'react'
import { CourseListHeroTxt } from '../../core/constants/mock/CourseListHero';

const CourseListTitles = () => {
  return (
    <div className="banner flex items-center h-130 w-[90%] bg-[url(/courseListBanner.svg)] bg-no-repeat bg-center bg-contain mb-15 p-10">
        <div className="flex flex-col gap-6 text-justify w-160">

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