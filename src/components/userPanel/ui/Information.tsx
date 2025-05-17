const Information = () => {
  return (
    <div className="relative w-full h-full p-2.5 grid grid-cols-3 grid-rows-4 items-start grid-flow-col">
      {/* info section */}
      {/* name section */}
      <div className=" flex items-center justify-baseline">
        <span className="">نام و نام خانوادگی :</span>
        <span className="">محمدزمان حسین پور</span>
      </div>
      {/* birth section */}
      <div className=" flex items-center justify-baseline">
        <span className="">تاریخ تولد :</span>
        <span className="">۱۴۰۴/۰۱/۱۳</span>
      </div>
      {/* number section */}
      <div className=" flex items-center justify-baseline">
        <span className="">شماره همراه :</span>
        <span className="">۰۹۱۱۶۸۱۰۷۹۶</span>
      </div>
      {/* national id section */}
      <div className=" flex items-center justify-baseline">
        <span className="">شماره ملی :</span>
        <span className="">۲۰۸۱۲۳۴۵۶۷</span>
      </div>
      {/* mail section */}
      <div className=" flex items-center justify-baseline">
        <span className="">ایمیل :</span>
        <span className="">john@mailto.com</span>
      </div>
      {/* gender section */}
      <div className=" flex items-center justify-baseline">
        <span className="">جنسیت :</span>
        <span className="">male</span>
      </div>
      {/* social section */}
      <div className=" flex items-center justify-baseline">
        <span className="">لینکداین :</span>
        <span className="">example</span>
      </div>
      <div className=" flex items-center justify-baseline">
        <span className="">تلگرام :</span>
        <span className="">example</span>
      </div>
      {/* about section */}
      <div className=" flex items-center justify-baseline">
        <span className="">درباره من :</span>
        <span className="">example</span>
      </div>
      {/* address section */}
      <div className=" flex items-center justify-baseline">
        <span className="">آدرس :</span>
        <span className="">example</span>
      </div>
      {/* lat section */}
      <div className=" flex items-center justify-baseline">
        <span className="">طول جغرافیایی :</span>
        <span className="">example</span>
      </div>
      {/* long section */}
      <div className=" flex items-center justify-baseline">
        <span className="">عرض جغرافیایی :</span>
        <span className="">example</span>
      </div>
      {/* map section */}
      <div className="absolute bottom-15 left-5 size-20 border-2 rounded-xl"></div>
      {/* edit button */}
      <button className="btn absolute bottom-0 left-0 border-t-2 border-r-2 border-[#e9e8ff] border-l-0 border-b-0 rounded-tr-lg rounded-none rounded-bl-[10px]">
        ویرایش
      </button>
    </div>
  );
};

export default Information;
