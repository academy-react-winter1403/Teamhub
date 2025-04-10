import { PriceRangeFilter } from "./PriceRangeFilter"

const Filters = () => {
  return (
    <div>
        <div className="filters w-70 bg-white shadow-md rounded-2xl p-3 ">

          <div className="flex items-center justify-between filterTop w-full h-10 rounded-xl bg-gray-200 mb-3 p-3">
            <h2 className="w-20 text-left bg-[url(/cardIcons/filter.svg)] bg-no-repeat bg-right">فیلتر ها</h2>
            <button className="w-10 h-8 bg-[url(/cardIcons/Delete.svg)] bg-no-repeat bg-contain"></button>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border-b-1 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-right text-[#263238]">دسته بندی ها</div>
            <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-b-1 border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked/>
            <div className="collapse-title font-semibold text-right text-[#263238]">قیمت</div>
            <div className="collapse-content text-sm"><PriceRangeFilter/></div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-b-1 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-right text-[#263238]">موضوعات</div>
            <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-b-1 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-right text-[#263238]">مدت زمان</div>
            <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
          </div>
 
       

        </div>
    </div>
  )
}

export {Filters}