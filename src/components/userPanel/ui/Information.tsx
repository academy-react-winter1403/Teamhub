const Information = () => {
  return (
    <div className="relative flex flex-row w-full h-full flex-wrap items-center justify-evenly p-2.5">
      <div className="w-1/3 h-1/3 flex items-center justify-evenly">
        <span className="">نام و نام خانوادگی :</span>
        <span className="">محمدزمان حسین پور</span>
      </div>
      <div className="w-1/3 h-1/3 flex items-center justify-evenly">
        <span className="">تاریخ تولد :</span>
        <span className="">۱۴۰۴/۰۱/۱۳</span>
      </div>
      <div className="w-1/3 h-1/3 flex items-center justify-evenly">
        <span className="">شماره همراه :</span>
        <span className="">۰۹۱۱۶۸۱۰۷۹۶</span>
      </div>
      <div className="w-1/3 h-1/3 flex items-center justify-evenly">
        <span className="">شماره ملی :</span>
        <span className="">۲۰۸۱۲۳۴۵۶۷</span>
      </div>
      <div className="w-1/3 h-1/3 flex items-center justify-evenly">
        <span className="">ایمیل :</span>
        <span className="">john@mailto.com</span>
      </div>
      <button className="btn absolute bottom-0 left-0 rounded-bl-lg rounded-tr-lg rounded-tl-none rounded-br-none border border-blue-500">
        ویرایش
      </button>
    </div>
  );
};

export default Information;
