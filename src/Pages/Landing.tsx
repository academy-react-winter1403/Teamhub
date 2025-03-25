import LandingTitles from "../components/LandnigTitles"
import Search from "../components/common/search/Search"
import LandingReport from "../components/cards/landingReport/LandingReport"

const Landing = () => {
  return (
    <>
      <div className="relative -top-25 bg-[url(/header-bg.svg)] bg-bottom bg-no-repeat bg-cover w-full h-[900px] min-h-screen mb-20 z-0 flex justify-center items-center">

        <div className="flex flex-row justify-around w-full">

          <div className="h-112 w-40 bg-[url(/codingRight.svg)] bg-no-repeat bg-contain"></div>
          <div  className="flex flex-col justify-between gap-2.5 flex-nowrap w-3xl">

              <LandingTitles />
              <Search />
              <LandingReport />

          </div>
          <div className="h-112 w-40 bg-[url(/codingLeft.svg)] bg-no-repeat bg-contain"></div>

        </div>

      </div>

    </>
  )
}

export {Landing}