import { CourseState } from "../../../core/constants/Types";
import { CategoryFilter } from "./CategoryFilter";
import { LevelFilter } from "./LevelFilter";
import { PriceRangeFilter } from "./PriceRangeFilter"
import { TeachersFilter } from "./TeachersFilter";
import { TypeFilter } from "./TypeFilter";
interface PriceRangeFilterProps {
  allCourses: CourseState[];
  onFilterChange: (filteredCourses: CourseState[]) => void;
  setCardList: (courses: CourseState[]) => void
}

const Filters = ({allCourses, onFilterChange, setCardList}: PriceRangeFilterProps ) => {
  return (
    <div>
        <div className="filters w-90 bg-white shadow-md rounded-2xl p-3 ">

          <div className="flex items-center justify-between filterTop w-full h-14 rounded-xl bg-gray-200 mb-3 p-3">
            <h2 className="w-25 text-left text-lg text-gray-700 font-bold bg-[url(/cardIcons/filter.svg)] bg-contain bg-no-repeat bg-right">فیلتر ها</h2>
            <button className="btn w-10 rounded-2xl bg-[url(/cardIcons/Delete.svg)] bg-no-repeat bg-contain"></button>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border-b-1 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-right text-[#263238]">دسته بندی ها</div>
            <div className="collapse-content text-sm">
              <CategoryFilter
                allCourses={allCourses}
                setCardList={setCardList}
              />
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-b-1 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-right text-[#263238]">قیمت</div>
            <div className="collapse-content text-sm">
              <PriceRangeFilter 
                allCourses={allCourses}
                onFilterChange={onFilterChange}
                />
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-b-1 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-right text-[#263238]">سطح دوره</div>
            <div className="collapse-content text-sm">
              <LevelFilter
                allCourses={allCourses}
                setCardList={setCardList}
              />
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-b-1 border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked/>
            <div className="collapse-title font-semibold text-right text-[#263238]">نوع دوره</div>
            <div className="collapse-content">
              <TypeFilter />
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border-b-1 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-right text-[#263238]">اساتید دوره</div>
            <div className="collapse-content">
              <TeachersFilter
               allCourses={allCourses}
               setCardList={setCardList}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export {Filters}