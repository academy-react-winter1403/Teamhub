
const PopularCoursesBtn = () => {
  return (
    <div className="dropdown w-[25%]">
      <div tabIndex={0} role="button" className="btn w-full h-12 bg-white rounded-xl shadow-sm text-base text-gray-600">محبوب ترین ها 
        <span className="w-5 h-full bg-[url(/arrow-down.svg)] bg-no-repeat bg-center"></span>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>    
  )
}

export {PopularCoursesBtn}