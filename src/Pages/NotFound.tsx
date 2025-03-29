const NotFound = () => {
  return (
    <div className="w-full h-screen bg-gray-400">
      <div className="w-96 min-h-96 bg-[url(./dino.svg)] bg-no-repeat bg-left-bottom bg-contain absolute bottom-0 left-0"></div>
      <div className="w-96 h-96 bg-[url(./bubble.svg)] bg-no-repeat bg-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col    justify-evenly items-center pb-20">
        <h1 className="text-red-700 font-black text-6xl text-center flex justify-evenly items-center">
          خطای ۴۰۴
        </h1>
        <button className="btn btn-warning w-8/10">بازگشت به خانه</button>
      </div>
    </div>
  );
};

export default NotFound;
