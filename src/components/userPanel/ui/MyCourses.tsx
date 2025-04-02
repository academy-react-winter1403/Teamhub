import Search from "../../common/search/Search";

const MyCourses = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-[8%] flex items-center">
        <Search />
      </div>
      <div className="w-full h-[75%] border p-3.5 flex flex-col justify-between">
        <div className="w-full h-[10%] border bg-blue-400"></div>
        <div className="w-full h-8/9 border ">
          <div className="w-full h-1/6 border"></div>
        </div>
      </div>
      <div className="w-full h-1/8 border"></div>
    </div>
  );
};

export default MyCourses;
