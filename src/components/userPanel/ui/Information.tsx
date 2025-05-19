import { useEffect } from "react";
import { useProfileQuery } from "../../../core/hooks/query/useProfileQuery";
import { useUIStore } from "../../../core/store/useUiStore";

const Information = () => {
  const { data: profile, isLoading, error, refetch } = useProfileQuery();
  const { isEditModalOpen, toggleEditModal } = useUIStore();

  useEffect(() => {
    if (!profile && !isLoading && !error) {
      refetch();
    }
  }, [refetch, profile, isLoading, error]);

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div>خطا: {(error as Error).message}</div>;
  }

  if (!profile) {
    return <div>اطلاعات پروفایل یافت نشد</div>;
  }

  return (
    <div className="relative w-full h-full p-2.5 grid grid-cols-3 grid-rows-4 items-center ">
      <div className="flex items-center justify-baseline">
        <span className="">نام و نام خانوادگی :</span>
        <span className="">{`${profile.fName || "فلان"} ${
          profile.lName || "فلانی"
        }`}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">تاریخ تولد :</span>
        <span className="">
          {profile.birthDay && profile.birthDay !== "0001-01-01T00:00:00"
            ? profile.birthDay
            : "نامشخص"}
        </span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">شماره همراه :</span>
        <span className="">{profile.phoneNumber || "نامشخص"}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">شماره ملی :</span>
        <span className="">{profile.nationalCode || "نامشخص"}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">ایمیل :</span>
        <span className="">{profile.email || "نامشخص"}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">جنسیت :</span>
        <span className="">{profile.gender ? "مرد" : "زن"}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">لینکداین :</span>
        <span className="">{profile.linkdinProfile || "نامشخص"}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">تلگرام :</span>
        <span className="">{profile.telegramLink || "نامشخص"}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">درباره من :</span>
        <span className="">{profile.userAbout || "نامشخص"}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">آدرس :</span>
        <span className="">{profile.homeAdderess || "نامشخص"}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">طول جغرافیایی :</span>
        <span className="">{profile.longitude || "نامشخص"}</span>
      </div>
      <div className="flex items-center justify-baseline">
        <span className="">عرض جغرافیایی :</span>
        <span className="">{profile.latitude || "نامشخص"}</span>
      </div>
      <button
        className="btn absolute bottom-0 left-0 border-t-2 border-r-2 border-[#e9e8ff] border-l-0 border-b-0 rounded-tr-lg rounded-none rounded-bl-[10px]"
        onClick={toggleEditModal}
      >
        ویرایش
      </button>
      {isEditModalOpen && (
        <div className="modal">
          <h2>ویرایش پروفایل</h2>
          <button onClick={toggleEditModal}>بستن</button>
        </div>
      )}
    </div>
  );
};

export default Information;
