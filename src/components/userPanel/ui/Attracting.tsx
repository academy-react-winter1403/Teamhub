import { GraduationCap, ShoppingBasket } from "lucide-react";
import { useProfileStore } from "../../../core/store/profileStore";
import { useEffect } from "react";

const Attracting = () => {
  const { profile, fetchProfile } = useProfileStore();

  useEffect(() => {
    if (!profile) {
      fetchProfile();
    }
  }, [fetchProfile, profile]);

  return (
    <div className="w-full py-8 flex justify-between ">
      {/* what term you sign */}
      <div className="w-1/2 flex justify-around">
        <div className="relative w-50 h-20 bg-gradient-to-l from-violet-300 to-violet-400 rounded-lg shadow-lg flex flex-col items-start justify-around px-2.5">
          <h4 className="">دوره</h4>
          <span className="">شرکت کرده اید</span>
          <GraduationCap
            className="absolute size-15 text-black -top-7 left-2.5 bg-gradient-to-t from-violet-300 to-violet-500 rounded-full p-2.5"
            strokeWidth={1}
          />
        </div>
        <div className="relative w-50 h-20 bg-gradient-to-l from-violet-300 to-violet-400 rounded-lg shadow-lg  flex flex-col items-start justify-around px-2.5">
          <h4 className="">دوره</h4>
          <span className="">رزرو کرده اید</span>
          <ShoppingBasket
            className="absolute size-15 text-black -top-7 left-2.5 bg-gradient-to-t from-violet-300 to-violet-500 rounded-full p-2.5"
            strokeWidth={1}
          />
        </div>
      </div>
      {/* complete information */}
      <div className="w-1/2 flex justify-center gap-x-4 items-center">
        {/* text */}
        <span className="">شما هنوز اطلاعات خود را تکمیل نکرده اید</span>
        {/* progress bar */}
        {/* For TSX uncomment the commented types below */}
        <div
          className="radial-progress bg-gradient-to-l from-violet-300 to-violet-500 text-primary-content"
          style={
            {
              "--value": profile?.data?.profileCompletionPercentage || 0,
            } as React.CSSProperties
          }
          aria-valuenow={profile?.data?.profileCompletionPercentage || 0}
          role="progressbar"
        >
          {profile?.data?.profileCompletionPercentage || 0}%
        </div>
      </div>
    </div>
  );
};

export default Attracting;
