import { CourseCards } from "../components/cards/courseCards/CourseCards"

const CourseList = () => {
  return (
    <div className="bg-[#FAFBFC] relative w-full">
        <div className="w-full h-25 bg-[#FAFBFC] absolute -top-25"></div>
        <div className="banner h-130 w-[90%] bg-[url(/courseListBanner.png)] bg-no-repeat bg-center bg-contain"></div>
        <div className="m-auto w-[90%] flex justify-center gap-5 mt-10">
            <div className="filters w-[22%] h-25 border-1 rounded-2xl">
              
            </div>
            
            <div className="courses  rounded-xl w-[70%]">

                <div className="tabs tabs-box flex bg-[#FAFBFC] mb-5"> 
                  <input type="radio" name="my_tabs_6" className="tab bg-[url(/grid-1.svg)] bg-no-repeat bg-center m-1 mb-8" defaultChecked/>
                  <div className="tab-content bg-[#FAFBFC]">
                    <div className="courseCards w-full flex flex-wrap justify-between gap-2 border-1 border-blue-500">
                      <CourseCards/>
                    </div>
                  </div>

                  <input type="radio" name="my_tabs_6" className="tab bg-[url(/grid-2.svg)] bg-no-repeat bg-center m-1"  />
                  <div className="tab-content bg-base-100 border-base-300 p-6">
                    Tab content 2</div>                
                  
                  <div className='w-[65%] box-border pl-10 pr-10'>
                    <label className="input outline-none rounded-xl w-full border-0 drop-shadow-sm">
                      <input type="search" className="grow outline-none bg-[url(./search-normal.svg)] bg-no-repeat bg-3 bg-left" placeholder="چی میخوای یاد بگیری ؟" />
                    </label>
                  </div>
                      
                  <button className="btn w-[25%] h-11 bg-white  rounded-xl shadow-md font-light">
                       <img src="./sort.svg" alt="" />
                       محبوب ترین ها
                       <img src="./arrow-down.svg" className="mr-5" alt="" /> 
                  </button>
               </div>

                {/* <div className="courseCards w-full flex flex-wrap justify-between gap-2 border-1 border-blue-500">
                  <CourseCards/>
                  <CourseCards/>
                  <CourseCards/>
                  <CourseCards/>
                </div> */}

                
            </div>
        </div>
    </div>
  )
}

export {CourseList}