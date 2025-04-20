const NotFound = () => {
  return (
    <div className="w-full h-200 flex flex-col justify-evenly items-center">
      <img src="./not-found.svg" alt="404page" className="w-[80%] lg:w-[40%]" />
      <h1 className="font-bold text-xl lg:text-2xl -mt-30">
        صفحه مورد نظر یافت نشد !
      </h1>
      <a
        href="/"
        className="bg-info text-white px-8 py-3 rounded-[24px] mt-5 w-60"
      >
        بازگشت به صفحه اصلی
      </a>
    </div>
  );
};

export default NotFound;
