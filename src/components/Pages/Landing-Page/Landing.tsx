// import React from 'react'

import BannerContentOne from "./LandnigTitles"

const Landing = () => {
  return (
    <>
      <div className="relative -top-25 bg-[url(/header-bg.svg)] bg-bottom bg-no-repeat bg-cover w-full h-[900px] min-h-screen mb-20 z-0 flex justify-center items-center">

        <div className="flex flex-row justify-evenly w-full">

          <div className="h-112 w-40 bg-[url(/codingRight.svg)] bg-no-repeat bg-contain"></div>
          <div  className="flex flex-col justify-center gap-2.5 flex-nowrap">

              <BannerContentOne />

                {/* <div></div>

                <div>

                </div> */}

          </div>
          <div className="h-112 w-40 bg-[url(/CodingLeft.svg)] bg-no-repeat bg-contain"></div>

        </div>

      </div>

    </>
  )
}

export {Landing}