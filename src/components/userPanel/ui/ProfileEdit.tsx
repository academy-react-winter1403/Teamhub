import InputTypes from "./InputTypes";

const ProfileEdit = () => {
  return (
    <>
      <div className="divider divider-neutral px-4 text-xl ">
        تنظیمات امنیتی
      </div>
      <div className="w-full h-full border flex flex-col justify-between">
        <div className="w-full h-2/6 border flex items-center justify-evenly flex-col">
          <div className="avatar">
            <div className="w-42 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <span className="text-gray-600 ">ویرایش تصویر</span>
        </div>
        <div className="w-full h-2/6 p-2.5 border flex flex-wrap ">
          <InputTypes />
          <InputTypes />
          <InputTypes />
          <InputTypes />
          <InputTypes />
          <InputTypes />
        </div>
        <div className="w-full h-1/6 border flex items-center justify-evenly">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            Responsive
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
