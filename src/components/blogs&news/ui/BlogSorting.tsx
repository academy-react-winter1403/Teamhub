
const BlogSorting = () => {
  return (
    <div className="w-[50%] flex justify-around items-center bg-white rounded-2xl drop-shadow-sm tabs tabs-boxed">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl hover:bg-blue-400 hover:text-white  checked:bg-blue-400 checked:text-white "
          aria-label="همه"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl hover:bg-blue-400 hover:text-white  checked:bg-blue-400 checked:text-white "
          aria-label="محبوب‌ترین‌ها"
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl hover:bg-blue-400 hover:text-white  checked:bg-blue-400 checked:text-white "
          aria-label="پربازدیدترین‌ها"
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl hover:bg-blue-400 hover:text-white  checked:bg-blue-400 checked:text-white "
          aria-label="جدیدترین‌ها"
        />
      </div>
  )
}

export {BlogSorting}