import { Search } from "lucide-react";

const UserSearch = () => {
  return (
    <>
      <div className="relative w-full max-w-sm">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        <input
          type="text"
          placeholder="جستجو ..."
          className="w-full py-2 pr-10 pl-4 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-sm transition-all duration-200 placeholder-gray-400"
        />
      </div>
    </>
  );
};

export default UserSearch;
