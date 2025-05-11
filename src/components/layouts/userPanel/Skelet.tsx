import { Bell, Search, Settings, User } from "lucide-react";
import { getCurrentJalaliDate } from "../../../core/helper/useJalali";

const currentDate = getCurrentJalaliDate();

const Skelet = () => {
  return (
    <>
      <div className="w-full rounded-lg p-4 flex justify-between items-center">
        <div className="text-gray-600">{currentDate}</div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input className="pl-8 pr-10" placeholder="جستجو ..." />
          </div>
          <Bell className="text-gray-500" />
          <Settings className="text-gray-500" />
          <User className="text-gray-500" />
        </div>
      </div>
    </>
  );
};

export default Skelet;
